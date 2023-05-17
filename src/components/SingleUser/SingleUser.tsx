"use client";

import { User } from "@prisma/client";

export default function SingleUser(id:User["id"]) {
  return (
    <div>User with id of {id}</div>
  )
}
