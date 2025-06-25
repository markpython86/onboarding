"use client";

import { useState } from "react";

export default function ErrorClientComponentPage() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // When the state changes, the component re-renders, this condition is met,
    // and an error is thrown on the client. React catches it and shows the error boundary.
    throw new Error("💥 Bleep bloop! This error happened on the client.");
  }

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-stone-900">
        Client Error Demo
      </h1>
      <p className="mt-4 text-stone-600">
        This page loads correctly. Click the button to trigger a client-side
        error.
      </p>
      <button
        onClick={() => setHasError(true)}
        className="mt-6 bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700"
      >
        Trigger Client Error
      </button>
    </div>
  );
}
