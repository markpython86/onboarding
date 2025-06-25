import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";
import { getPoll } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { PollVoteForm } from "@/components/poll-vote-form";

// This component will be rendered on the server.
export default async function PollPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const poll = await getPoll(id);

  if (!poll) {
    notFound();
  }

  return (
    <div className="space-y-8 flex flex-col gap-4 py-12">
      <Link href="/">
        <Button variant="outline">← Back to All Polls</Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{poll.question}</CardTitle>
          <CardDescription>
            Cast your vote by selecting one of the options below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <React.Suspense fallback={<div>Loading options...</div>}>
            <PollVoteForm initialPoll={poll} />
          </React.Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
