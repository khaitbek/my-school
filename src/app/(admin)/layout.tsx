import AuthLayout from "@/providers";
import { Dashboard } from "@/components/Dashboard";
import { LayoutWithChildren } from "@/types";
import { Montserrat } from "next/font/google"
import '../globals.css';
const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function AdminLayout({ children }: LayoutWithChildren) {
  return (
    <html lang="en">
      <body className={`bg-white ${montserrat.className}`}>
        <AuthLayout>
          <div className="flex items-start">
            <Dashboard />
            {children}
          </div>
        </AuthLayout>
      </body>
    </html>
  )
}