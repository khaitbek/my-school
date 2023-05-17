import { Link, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

export function Logo() {
  const { colorMode } = useColorMode();
  return (
    <Link href="/" as={NextLink}>
      <Image src={colorMode === "dark" ? "/dark-logo.png" : "/white-logo.png"} alt="28-maktabning 11-v sinfining logotipi" width="100" height="55" />
    </Link>
  )
}