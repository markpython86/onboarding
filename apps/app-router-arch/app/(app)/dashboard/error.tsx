"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-lg">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="mt-2">{error.message}</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  );
}
