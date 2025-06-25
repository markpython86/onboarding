export default async function ErrorServerComponentPage() {
  // This error is thrown on the server during the rendering process.
  // Next.js will catch it and render the closest error.tsx boundary.
  throw new Error("💥 Kaboom! This error happened on the server.");

  return (
    <div>
      <h1>This content will never be seen.</h1>
    </div>
  );
}
