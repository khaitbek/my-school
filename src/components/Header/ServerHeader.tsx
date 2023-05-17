import { LayoutWithChildren } from "@/types";

export function ServerHeader({ children }: LayoutWithChildren) {
  return (
    <header>
      {children}
    </header>
  )
}
