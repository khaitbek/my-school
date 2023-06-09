import AuthLayout from "@/providers";
import { LayoutWithChildren } from "@/types";
import { Montserrat } from "next/font/google"
import { NotAuthorized } from "@/components/NotAuthorized";
import { getServerSession } from "next-auth";
import { Container } from "@/components";
import { prisma } from "@db/index";
import '../globals.css';

// const montserrat = Montserrat({ subsets: ["latin", "cyrillic"], variable: "--font-montserrat" });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default async function AdminLayout({ children }: LayoutWithChildren) {
  const session = await getServerSession();
  const { role } = await prisma.user.findFirst({ where: { email: session?.user?.email } });
  return (
    <html lang="en">
      <body>
        <AuthLayout>
          <Container>
            {!session?.user || role !== "ADMIN" ? <NotAuthorized /> : (
              <>
                {children}
              </>
            )}
          </Container>
        </AuthLayout>
      </body>
    </html>
  )
}