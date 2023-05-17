import { ReactNode } from "react";

declare global {
  declare namespace React.JSX {
    type ElementType = | keyof JSX.IntrinsicElements | ((props: any) => Promise<ReactNode> | ReactNode)
  }
}