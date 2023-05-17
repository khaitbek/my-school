import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { Container } from "../Container";

export function Footer(props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <footer className="px-4 py-6" {...props} >
      <Container>
        <strong>Footer</strong>
      </Container>
    </footer>
  )
}
