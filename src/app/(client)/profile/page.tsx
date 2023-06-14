import { Container } from "@/components/Container";
import { EditUser } from "@/components/EditUser";
import { prisma } from "@db/index";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";

export default async function Profile() {
  const { user: sessionUser } = await getServerSession();
  const user = await prisma.user.findFirst({ where: { email: sessionUser.email } });
  if (!sessionUser) signIn();
  return (
    <Container>
      <EditUser user={user} />
    </Container>
  )
}
