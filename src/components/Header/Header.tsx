"use client";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { Container } from "../Container";
import { ServerHeader } from "./ServerHeader";
import { Box, Button, ButtonGroup, Flex, Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { signIn } from "next-auth/react";

export function Header(props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <ServerHeader>
      <Box className="px-4 py-6 shadow-xl">
        <Container>
          <Flex justify="end" align="center" gap="4">
            <ButtonGroup>
              <Button onClick={() => signIn()} rightIcon={<Icon as={FaSignInAlt} />}>
                Tizimga kirish
              </Button>
              <IconButton onClick={() => toggleColorMode()} aria-label="Toggle mode" icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />} />
            </ButtonGroup>
          </Flex>
        </Container>
      </Box>
    </ServerHeader>
  )
}
