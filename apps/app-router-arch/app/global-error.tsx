"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);
  return (
    <html>
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            fontFamily: "sans-serif",
            backgroundColor: "#fef2f2",
            color: "#991b1b",
          }}
        >
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Application Global Error
          </h1>
          <p style={{ marginTop: "1rem" }}>
            A critical error occurred and the application could not recover.
          </p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: "1.5rem",
              backgroundColor: "#b91c1c",
              color: "white",
              fontWeight: "bold",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Reload Page
          </button>
        </div>
      </body>
    </html>
  );
}
