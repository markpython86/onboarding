"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { createPollAction, type ActionState } from "@/app/actions";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

function SubmitButton() {
  // Key Learning Point (React 19):
  // `useFormStatus` is a hook that provides status information for the
  // last form submission. It must be used in a component that is a child
  // of the <form> element.
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Creating..." : "Create Poll"}
    </Button>
  );
}

export function CreatePollForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [options, setOptions] = useState<string[]>(["", ""]);

  const initialState: ActionState = { message: "" };
  // Key Learning Point (React 19):
  // `useActionState` is a hook for managing the state of a form action.
  // It takes the action function and an initial state as arguments.
  // It returns the current state and a wrapped action function to pass to the form.
  const [state, formAction] = useActionState(createPollAction, initialState);

  const handleAddOption = () => {
    if (options.length < 5) {
      // Limit to 5 options for simplicity
      setOptions([...options, ""]);
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  // Reset the form after a successful submission
  useEffect(() => {
    if (state.message.startsWith("Success")) {
      formRef.current?.reset();
      setOptions(["", ""]);
    }
  }, [state]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a New Poll</CardTitle>
        <CardDescription>
          Enter your question and provide at least two options.
        </CardDescription>
      </CardHeader>
      <form ref={formRef} action={formAction}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="question">Question</Label>
            <Input
              id="question"
              name="question"
              placeholder="What should we vote on?"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Options</Label>
            {options.map((option, index) => (
              <Input
                key={index}
                name="option"
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                required
              />
            ))}
          </div>
          {state.message && (
            <p
              className={`text-sm ${
                state.message.startsWith("Error")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {state.message}
            </p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={handleAddOption}
            disabled={options.length >= 5}
          >
            Add Option
          </Button>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
