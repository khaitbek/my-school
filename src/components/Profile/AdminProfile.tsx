"use client";

import * as Avatar from "@radix-ui/react-avatar";
import { type Session } from "next-auth";

interface AdminProfileProps {
  session: Session | null
}

export async function AdminProfile({ session }: AdminProfileProps) {

  return (
    <Avatar.Root>
      {session?.user.image ? (
        <Avatar.Image src={session?.user.image as string} />
      ) : (
        <Avatar.Fallback>
          {session?.user.name?.[0]}
        </Avatar.Fallback>
      )}

    </Avatar.Root>
  )
}
