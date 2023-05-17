"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export function AuthLink() {
  const { data: session } = useSession();
  if (!session?.user) {
    return (
      <button onClick={() => signIn("credentials")}>
        Log in
      </button>
    )
  }

  return (
    <button onClick={() => signOut()}>
      Log out
    </button>
  )
}
