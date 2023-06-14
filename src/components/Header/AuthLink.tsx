"use client";
import { Button, Icon } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaSignInAlt } from "react-icons/fa";
export function AuthLink() {
  const { data } = useSession();
  return (
    <Button onClick={() => signIn()} rightIcon={<Icon as={FaSignInAlt} />}>
      {data?.user ? "Tizimdan chiqish" : "Tizimga kirish"}
    </Button>
  )
}

export function LogOutButton() {
  return (
    <Button onClick={() => signOut()} rightIcon={<Icon as={FaSignInAlt} />}>
      Tizimdan chiqish
    </Button>
  )
}