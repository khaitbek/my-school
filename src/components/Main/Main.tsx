import { DetailedHTMLProps, HTMLAttributes } from "react";

interface MainProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> { };

export function Main(props: MainProps) {
  const { children } = props;
  return (
    <main className="site-main" {...props}>
      {children}
    </main>
  )
}
