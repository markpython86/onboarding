"use client";

import { useOptimistic } from "react";
import { useFormStatus } from "react-dom";
import type { Poll, Option } from "@/lib/types";
import { addVoteAction } from "@/app/actions";
import { Button } from "@workspace/ui/components/button";

type OptimisticUpdate = {
  optionId: number;
  isPending: boolean;
};

// A smaller component to render each voting option.
// It uses `useFormStatus` to know when the form it's in is submitting.
function PollOption({
  option,
  totalVotes,
}: {
  option: Option;
  totalVotes: number;
}) {
  const { pending } = useFormStatus();
  const votePercentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;

  return (
    <Button
      type="submit"
      name="optionId"
      value={option.id}
      className="relative w-full justify-start overflow-hidden p-0"
      disabled={pending}
    >
      <div
        className="absolute left-0 top-0 h-full bg-primary/20"
        style={{ width: `${votePercentage}%` }}
      />
      <div className="relative z-10 flex w-full justify-between px-4 py-2">
        <span>{option.text}</span>
        <span>
          {option.votes} vote{option.votes !== 1 && "s"} (
          {votePercentage.toFixed(0)}%)
        </span>
      </div>
    </Button>
  );
}

// The main form component that orchestrates the optimistic update.
export function PollVoteForm({ initialPoll }: { initialPoll: Poll }) {
  // Key Learning Point (React 19 - useOptimistic):
  // `useOptimistic` lets us apply a temporary state change that we expect to happen.
  // It takes the current state (`initialPoll`) and an update function.
  const [optimisticPoll, updateOptimisticPoll] = useOptimistic(
    initialPoll,
    (currentPoll: Poll, { optionId, isPending }: OptimisticUpdate): Poll => {
      // If the action is pending, we apply the optimistic update.
      if (isPending) {
        const newOptions = currentPoll.options.map((option) => {
          if (option.id === optionId) {
            // Create a new option object with the incremented vote count.
            return { ...option, votes: option.votes + 1 };
          }
          return option;
        });

        // Return a new poll object with the updated options.
        return { ...currentPoll, options: newOptions };
      }
      // If not pending, we just return the current state from the server.
      return currentPoll;
    }
  );

  // This is the action that will be called when the form is submitted.
  const formAction = async (formData: FormData) => {
    const optionId = Number(formData.get("optionId"));

    // We call the `updateOptimisticPoll` function before starting the server action.
    // This immediately triggers the optimistic UI update.
    updateOptimisticPoll({ optionId, isPending: true });

    try {
      // Call the actual server action.
      await addVoteAction(initialPoll.id, optionId);
    } finally {
      // Once the server action is complete, we tell React the action is no longer pending.
      // React will then revert the optimistic state and re-render with the final,
      // true state from the revalidated data.
      updateOptimisticPoll({ optionId, isPending: false });
    }
  };

  const totalVotes = optimisticPoll.options.reduce(
    (sum, o) => sum + o.votes,
    0
  );

  return (
    <form action={formAction} className="space-y-3">
      {optimisticPoll.options.map((option) => (
        <PollOption key={option.id} option={option} totalVotes={totalVotes} />
      ))}
    </form>
  );
}
