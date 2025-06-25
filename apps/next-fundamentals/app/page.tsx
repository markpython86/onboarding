import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { getPolls } from "@/lib/db";
import { Suspense } from "react";
import { CreatePollForm } from "@/components/create-poll";
import { unstable_noStore as noStore } from "next/cache";

async function PollsList() {
  // Key Learning Point (Caching):
  // In Next.js 15, `fetch` requests are no longer cached by default. Since our
  // `getPolls` function doesn't use `fetch`, its caching behavior is determined
  // by whether the route is statically or dynamically rendered. By default,
  // pages are static, meaning this would be cached at build time.
  // We'll explore how to make this dynamic and then how to opt-in to caching later.
  // Key Learning Point (Caching):
  // To demonstrate Next.js 15's uncached-by-default behavior for dynamic rendering,
  // we use `noStore()`. This tells Next.js to treat this component as fully dynamic,
  // meaning it will re-render on every request.
  noStore();

  console.log(`>>> PollsList rendering at: ${new Date().toLocaleTimeString()}`);
  const polls = await getPolls();

  if (polls.length === 0) {
    return (
      <p className="text-muted-foreground">
        No polls found. Why not create one?
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {polls.map((poll) => {
        const totalVotes = poll.options.reduce((sum, o) => sum + o.votes, 0);
        const createdAtDate = new Date(poll.createdAt);
        return (
          <Link href={`/polls/${poll.id}`} key={poll.id}>
            <Card className="flex h-full flex-col transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle>{poll.question}</CardTitle>
                <CardDescription>
                  Created {createdAtDate.toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {poll.options.map((option) => (
                    <li
                      key={option.id}
                      className="text-sm text-muted-foreground"
                    >
                      {option.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">
                  {totalVotes} total votes
                </p>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

function PollsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(3)].map((_, i) => (
        <Card key={i} className="flex h-full flex-col">
          <CardHeader>
            <div className="h-6 w-3/4 animate-pulse rounded-md bg-muted" />
            <div className="mt-2 h-4 w-1/4 animate-pulse rounded-md bg-muted" />
          </CardHeader>
          <CardContent className="flex-grow space-y-2">
            <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
            <div className="h-4 w-2/3 animate-pulse rounded-md bg-muted" />
          </CardContent>
          <CardFooter>
            <div className="h-3 w-1/3 animate-pulse rounded-md bg-muted" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          ActionEcho Polls
        </h1>
        <p className="text-muted-foreground">
          Vote on existing polls or create your own.
        </p>
      </header>

      <CreatePollForm />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Available Polls</h2>
        <Suspense fallback={<PollsSkeleton />}>
          <PollsList />
        </Suspense>
      </div>
    </div>
  );
}
