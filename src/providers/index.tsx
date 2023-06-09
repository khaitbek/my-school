"use client";
import { LayoutWithChildren } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache"

import { extendTheme } from '@chakra-ui/react'
import { Suspense } from "react";

const theme = extendTheme({
  fonts: {
    body: "var(--font-montserrat)",
  },
  initialColorMode: "dark"
})
export const queryClient = new QueryClient();


export default function AuthLayout({ children }: LayoutWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <CacheProvider value={createCache({ key: "custom" })}>
          <ChakraProvider theme={theme}>
            <Suspense fallback={<h1>Loading...</h1>}>
              {children}
            </Suspense>
          </ChakraProvider>
        </CacheProvider>
      </SessionProvider>
    </QueryClientProvider>
  )
}
