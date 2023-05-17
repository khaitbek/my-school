"use client";

import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { User } from "@prisma/client";
import NextImage from "next/image";
import Link from "next/link";

export function User(user: User) {

  return (
    <Card maxW="md">
      <CardBody>
        <Image src={user.image || "https://fakeimg.pl/300x300"} htmlWidth="300" htmlHeight="300" width="full" objectFit="cover" height="300" borderRadius="lg" alt={user.name} />
        <Stack mt="6" spacing="3">
          <Stack spacing="2">
            <Heading className="font-montserrat" size='md'>
              {user.name}
            </Heading>
            
          </Stack>
        </Stack>
      </CardBody>
      <CardFooter maxW="full">
        <Button colorScheme="teal">
          <Link href={`/user/${user.id}`} target="_blank">
            Batafsil
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
