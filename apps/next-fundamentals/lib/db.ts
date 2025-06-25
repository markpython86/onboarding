import { revalidatePath } from "next/cache";
import type { Poll } from "./types";
import { unstable_cache as cache } from "next/cache"; // Import unstable_cache

// Simple in-memory store for polls
const polls: Map<string, Poll> = new Map();

// Seed with some initial data
const initialPolls: Poll[] = [
  {
    id: "1",
    question: "What is your favorite Next.js feature?",
    options: [
      { id: 1, text: "App Router", votes: 15 },
      { id: 2, text: "Server Actions", votes: 8 },
      { id: 3, text: "Image Optimization", votes: 12 },
    ],
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
  },
  {
    id: "2",
    question: "Which state management library do you prefer?",
    options: [
      { id: 1, text: "Zustand", votes: 20 },
      { id: 2, text: "Redux", votes: 5 },
      { id: 3, text: "Jotai", votes: 10 },
    ],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  },
];

initialPolls.forEach((poll) => polls.set(poll.id, poll));

// --- Database Functions ---
// Key Learning Point (Caching):
// We wrap our data-fetching function with `cache`. This is the new
// composable caching primitive in Next.js 15.
export const getPolls = cache(
  async () => {
    console.log(
      `>>> DB: Fetching all polls at ${new Date().toLocaleTimeString()}`
    );
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 500));
    return Array.from(polls.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  },
  ["all-polls"], // The cache key parts array. Must be unique.
  {
    revalidate: 30, // Revalidate this data at most once every 30 seconds.
    tags: ["polls"], // Assign a cache tag for on-demand revalidation.
  }
);

export const getPoll = cache(
  async (id: string) => {
    console.log(
      `>>> DB: Fetching poll ${id} at ${new Date().toLocaleTimeString()}`
    );
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 300));
    return polls.get(id);
  },
  ["poll-by-id"], // Cache key part. The `id` argument is automatically included.
  {
    tags: ["polls"], // Use the same tag for easy invalidation.
  }
);

export async function createPoll(
  question: string,
  options: string[]
): Promise<Poll> {
  const newPoll: Poll = {
    id: (polls.size + 1).toString(),
    question,
    options: options.map((text, index) => ({
      id: index + 1,
      text,
      votes: 0,
    })),
    createdAt: new Date(),
  };
  polls.set(newPoll.id, newPoll);
  // Revalidate the home page to show the new poll
  revalidatePath("/");
  return newPoll;
}

export async function addVote(pollId: string, optionId: number): Promise<void> {
  const poll = polls.get(pollId);
  if (poll) {
    const option = poll.options.find((o) => o.id === optionId);
    if (option) {
      option.votes++;
    }
  }
  // Revalidate the specific poll page
  revalidatePath(`/polls/${pollId}`);
  // Revalidate the home page (as it might show vote counts)
  revalidatePath("/");
}
