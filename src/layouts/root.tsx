import { Footer, Header, Main } from "@/components";
import { NotAuthorized } from "@/components/NotAuthorized";
import { LayoutWithChildren } from "@/types";
import { getServerSession } from "next-auth";

export async function MainLayout({ children }: LayoutWithChildren) {
  const session = await getServerSession();
  if (!session?.user) {
    return (
      <NotAuthorized />
    )
  }
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  )
}