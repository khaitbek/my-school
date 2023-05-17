import { getUsers } from "@/actions/user"
import { User } from "../User/User";

export default async function UserList() {
  const users = await getUsers();
  if (users === null) return <h2>No users</h2>
  return (
    <div className="grid grid-cols-[repeat(auto-fit,min(300px,100%))] gap-x-4 gap-y-6 justify-center">
      {users.map(user => (
        <User key={user.id} {...user} />
      ))}
    </div>
  )
}
