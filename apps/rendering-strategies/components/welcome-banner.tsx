import { cookies } from "next/headers";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

// This is an async Server Component.
// Because it uses the `cookies` function, it will be dynamically rendered.
export default async function WelcomeBanner() {
  const cookieStore = await cookies();
  const userPreference = cookieStore.get("user-preference");

  let userName = "Guest";
  if (userPreference?.value) {
    try {
      const parsed = JSON.parse(userPreference.value);
      userName = parsed.name || "Guest";
    } catch (e) {
      console.error("Failed to parse user-preference cookie:", e);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome back, {userName}!</CardTitle>
        <CardDescription>
          This banner is dynamically rendered on the server for every request.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
