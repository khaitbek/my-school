import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { Container } from "../Container";
import { Box, ButtonGroup, Flex, Link } from "@/components/chakra";
import { getServerSession } from "next-auth";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import UserAvatar from "./Avatar";
import NextLink from "next/link";

export async function Header(props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  const session = await getServerSession();
  const { user } = session;
  return (
    <>
      <Box className="px-4 py-6 shadow-xl">
        <Container>
          <Flex justify="space-between" align="center" gap="4">
            <Link as={NextLink} href="/">
              Bosh sahifa
            </Link>
            <ButtonGroup spacing="6">
              <ThemeToggler />
              {user ? <UserAvatar user={user} /> : null}
            </ButtonGroup>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
