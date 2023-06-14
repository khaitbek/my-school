import { Container } from "@/components";
import { UserContainer } from "@/components/UserList/UserList";
import { Skeleton, SkeletonCircle, SkeletonText, Button, ButtonGroup, Card, CardBody, CardFooter, Heading, IconButton, Image, Stack, Text } from "@/components/chakra";
import Link from "next/link";

export default function Loading() {
  const users = Array(20).fill("");
  return (
    <Container>
      <UserContainer>
        {users.map(user => (
          <Card key={crypto.randomUUID()} maxW="md">
            <CardBody>
              <Image className="w-full rounded-lg bg-slate-400" src={"https://placehold.co/300/webp?text="} loading="lazy" htmlWidth="300" htmlHeight="300" objectFit="cover" width="full" height="300" alt={"user"} />
              <Stack mt="6" spacing="3">
                <Stack spacing="2">
                  <Heading className="font-montserrat py-2" size='md'>

                  </Heading>
                  <SkeletonText className="py-2"></SkeletonText>
                  <SkeletonText className="py-2"></SkeletonText>
                </Stack>
              </Stack>
            </CardBody>
            <CardFooter maxW="full">
              <ButtonGroup>
                <Button colorScheme="teal">
                  <Link href={`/user/${user.id}`} target="_blank">

                  </Link>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </UserContainer>
    </Container>
  )
}
