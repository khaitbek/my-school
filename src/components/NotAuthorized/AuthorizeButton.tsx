"use client";

import { Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export default function AuthorizeButton() {
  return (
    <Button onClick={() => signIn()} colorScheme="teal">
      Tizimga kirish
    </Button>
  )
}
