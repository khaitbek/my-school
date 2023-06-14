"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export default function ThemeToggler() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton size="lg" onClick={() => toggleColorMode()} aria-label="Toggle mode" icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />} />
  )
}
