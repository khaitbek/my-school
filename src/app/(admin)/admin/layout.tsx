import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "../../../../prisma";
import AdminHeader from "@/components/Header/AdminHeader";
import { Container } from "@/components";
import { LayoutWithChildren } from "@/types";

export default async function Admin({ children }: LayoutWithChildren) {
  const session = await getServerSession(authOptions)!;
  console.log(session);

  const goToLoginPage = () => redirect("/api/auth/signin");
  if (!session) return goToLoginPage();
  // get user info from db based on the session user
  const user = await prisma.user.findFirst({ where: { email: session.user.email } });
  // if the user is not admin just redirect them to the signin page
  if (user?.role !== "ADMIN") return goToLoginPage();
  return (
    <div className="flex-grow">
      <AdminHeader />
      <main>
        <Container>
          {children}
        </Container>
      </main>
    </div>
  )
}
