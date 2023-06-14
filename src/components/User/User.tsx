import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, IconButton, Image, Stack, Text } from "@/components/chakra";
import { prisma } from "@db/index";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FaTrash, FaEdit } from "react-icons/fa";
import AdminButtons from "./AdminButtons";
export async function User(user: User) {
  const { user: sessionUser } = await getServerSession();
  const { role, name } = await prisma.user.findFirst({ where: { email: sessionUser.email } });
  return (
    <Card maxW="md">
      <CardBody>
        <Image className="w-full rounded-lg" src={user.image || "https://placehold.co/300/webp?text=" + user.name} loading="lazy" htmlWidth="300" htmlHeight="300" objectFit="cover" width="full" height="300" alt={user.name} />
        <Stack mt="6" spacing="3">
          <Stack spacing="2">
            <Heading className="font-montserrat" size='md'>
              {user.name}
            </Heading>
            <Text>Password: {user.password}</Text>
            <Text>Email: {user.name}</Text>
          </Stack>
        </Stack>
      </CardBody>
      <CardFooter maxW="full">
        <ButtonGroup>
          <Button colorScheme="teal">
            <Link href={`/user/${user.id}`}>
              Batafsil
            </Link>
          </Button>
          {(role === "ADMIN" || name === user.name) ? (
            <AdminButtons userId={user.id} />
          ) : null}
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}