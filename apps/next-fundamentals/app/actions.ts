"use server";

import { revalidatePath } from "next/cache";
import { createPoll, addVote } from "@/lib/db"; // Add addVote import
import { after } from "next/server"; // Import unstable_after

// This is the state that our form will manage.
// It can be extended with more specific error fields if needed.
export interface ActionState {
  message: string;
}

// This is our Server Action for creating polls.
export async function createPollAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const question = formData.get("question") as string;
  const options = formData.getAll("option").map((o) => o as string);

  // Basic server-side validation
  if (
    !question.trim() ||
    options.length < 2 ||
    options.some((o) => !o.trim())
  ) {
    return {
      message:
        "Error: Please provide a question and at least two non-empty options.",
    };
  }

  try {
    // Call our database function to create the poll
    await createPoll(question, options);
    revalidatePath("/");
    return { message: "Success: Poll created successfully!" };
  } catch (error) {
    console.error(error);
    return { message: "Error: Failed to create poll." };
  }
}

// This is our new Server Action for handling votes.
// It does not need `useActionState`, as we'll use `useOptimistic` on the client.
export async function addVoteAction(pollId: string, optionId: number) {
  // Update the database
  await addVote(pollId, optionId);

  // Key Learning Point (unstable_after):
  // The `after()` function schedules a task to run *after* the response
  // has been sent to the client. This is perfect for non-critical tasks
  // like logging or analytics, as it doesn't block the UI update.
  after(() => {
    console.log(
      `>>> Analytics: Vote cast for option ${optionId} on poll ${pollId}`
    );
  });

  // We revalidate the poll page path to ensure that on a full page reload,
  // the latest data is fetched from the server.
  revalidatePath(`/polls/${pollId}`);
}
