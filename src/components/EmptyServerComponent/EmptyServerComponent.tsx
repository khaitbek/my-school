import { LayoutWithChildren } from "@/types";

export function EmptyServerComponent({ children }: LayoutWithChildren) {
  return (
    <div>
      {children}
    </div>
  )
}
