import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { };

export function Container(props: ContainerProps) {
  const { children } = props;
  return (
    <div className="container mx-auto px-6" {...props}>
      {children}
    </div>
  )
}
