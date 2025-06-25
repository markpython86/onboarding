"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login() {
  const cookieStore = await cookies();
  cookieStore.set("auth_token", "secret_token_value", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });
  redirect("/dashboard");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_token");
  redirect("/");
}
