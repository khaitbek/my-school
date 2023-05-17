import '../globals.css';
import { MainLayout } from "@/layouts";
import { Montserrat } from 'next/font/google'
import { type LayoutWithChildren } from "@/types";
import AuthLayout from "@/providers";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"], variable: "--font-montserrat" });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: LayoutWithChildren) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${montserrat.variable}`}>
        <AuthLayout>
          <MainLayout>
            {children}
          </MainLayout>
        </AuthLayout>
      </body>
    </html>
  )
}

