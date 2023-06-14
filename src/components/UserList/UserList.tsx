import { User } from "@/components/User";
import { prisma } from "@db/index";
import { ComponentProps } from "react";

export default async function UserList() {
  const users = await prisma.user.findMany({});
  if (users === null) return <h2>No users</h2>
  return (
    <div className="grid grid-cols-[repeat(auto-fit,min(300px,100%))] gap-x-4 gap-y-6 justify-center">
      {users.map(user => (
        <User key={user.id} {...user} />
      ))}
    </div>
  )
}

export function UserContainer({ children }: ComponentProps<"div">) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,min(300px,100%))] gap-x-4 gap-y-6 justify-center mt-12">
      {children}
    </div>
  )
}