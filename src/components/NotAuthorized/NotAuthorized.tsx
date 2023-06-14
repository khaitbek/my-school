import { Box, Flex, Heading } from "@/components/chakra";
import { Container } from "../Container";
import AuthorizeButton from "./AuthorizeButton";

export function NotAuthorized() {
  return (
    <Flex minH="100dvh" justify="center" align="center">
      <Box>
        <Container className="grid gap-6 place-content-center place-items-center">
          <Heading>
            Iltimos, tizimga kiring
          </Heading>
          <AuthorizeButton />
        </Container>
      </Box>
    </Flex>
  )
}
