import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "../../../../prisma";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return redirect("/auth");
  const user = await prisma.user.findFirst({ where: { email: session.user.email } });
  if (user?.role === "ADMIN") return redirect("/admin");
  return (
    <h2 className="text-3xl">Profile</h2>
  )
}
