/* eslint-disable react/no-unescaped-entities */
"use client";
import { Container, EmptyServerComponent } from "@/components";
import { Button, ButtonGroup, Flex, Grid, Heading, Link, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { User } from "@prisma/client";
import { prisma } from "@db/index";
import axios, { AxiosResponse } from "axios";

interface SingleUserParams {
  params: {
    userId: User["id"]
  }
}

async function getUser(id: User["id"]) {
  const user: AxiosResponse<User, User> = await axios.get("/api/user", {
    params: {
      id
    }
  })
  return user.data
}

export default function SingleUserPage({ params: { userId } }: SingleUserParams) {
  const { isLoading, data: user, isError } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      return await getUser(userId)
    }
  });
  if (isLoading) return <Heading>Loading...</Heading>
  return (
    <>
      <Container>
        <Flex direction={["column", "column", "row"]} pt="12">
          <Image mb={["6", "6", "0"]} mr="12" src={user?.image || "https://via.placeholder.com/300x500"} rounded="lg" objectFit="contain" width={["full", "full", "300px"]} height={["400px", "450px", "auto"]} htmlWidth={"300"} htmlHeight={"400"} alt="User" />
          <Stack spacing="4" py="8">
            <Stack maxW="500px" spacing="2">
              <Heading>
                {user.name}
              </Heading>
              <Text fontSize={["lg", "xl"]}>
                {user.description}
              </Text>
            </Stack>
            <UnorderedList>
              <ListItem listStyleType="none">
                Tug'ilgan sana - <Text as="span" ml="2" fontWeight="bold">
                  {user.birthOfDate}
                </Text>
              </ListItem>
              <ListItem listStyleType="none">
                Telefon raqam - <Link href={`tel:${user.phoneNumber}`}>
                  <Text as="span" ml="2" fontWeight="bold">
                    {user.phoneNumber}
                  </Text>
                </Link>
              </ListItem>
              <ListItem listStyleType="none">
                Yashash manzili -
                <Text as="span" ml="2" fontWeight="bold">
                  {user.address}
                </Text>
              </ListItem>
              <ListItem listStyleType="none">
                Kasbi -
                <Text as="span" ml="2" fontWeight="bold">
                  {user.job}
                </Text>
              </ListItem>
              <ListItem listStyleType="none">
                Pochta manzili - <Text as="span" ml="2" fontWeight="bold">
                  {user.email}
                </Text>
              </ListItem>
              <ListItem listStyleType="none">
                Tug'ilgan sana - <Text as="span" ml="2" fontWeight="bold">
                  {user.birthOfDate}
                </Text>
              </ListItem>
            </UnorderedList>
            <ButtonGroup>
              <Button rightIcon={<PhoneIcon />}>
                <Link href={`tel:${user.phoneNumber}`}>
                  Bog'lanish
                </Link>
              </Button>
              <Button rightIcon={<EmailIcon />}>
                <Link href={`mailto:${user.email}`}>
                  Xabar yozish
                </Link>
              </Button>
            </ButtonGroup>
          </Stack>
        </Flex>
      </Container>
    </>
  )
}
