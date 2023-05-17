import { Footer, Header, Main } from "@/components";
import { LayoutWithChildren } from "@/types";

export function MainLayout({ children }: LayoutWithChildren) {
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