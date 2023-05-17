import * as Avatar from '@radix-ui/react-avatar';
import { getServerSession } from "next-auth";
import { AdminProfile } from "../Profile";
export default async function AdminHeader() {
  const session = await getServerSession();
  return (
    <header className="block px-8 py-[31px] bg-teal-500">
      <div className="flex justify-end items-center">
        <AdminProfile session={session} />
      </div>
    </header>
  )
}
