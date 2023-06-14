import { Container } from "@/components";
import { Button, ButtonGroup, Flex, Grid, Heading, Link, ListItem, Stack, Text, UnorderedList, Image } from "@/components/chakra";

import { FaEnvelope, FaPhone } from "react-icons/fa"
import { User } from "@prisma/client";
import { prisma } from "@db/index";

export interface SingleUserParams {
  params: {
    userId: User["id"]
  }
}

export default async function SingleUserPage({ params: { userId } }: SingleUserParams) {
  const user = await prisma.user.findFirst({ where: { id: userId } });
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
                Tugilgan sana - <Text as="span" ml="2" fontWeight="bold">
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
            </UnorderedList>
            <ButtonGroup>
              <Button rightIcon={<FaPhone />}>
                <Link href={`tel:${user.phoneNumber}`}>
                  Boglanish
                </Link>
              </Button>
              {/* <Button rightIcon={<FaEnvelope />}>
                <Link href={`mailto:${user.email}`}>
                  Xabar yozish
                </Link>
              </Button> */}
            </ButtonGroup>
          </Stack>
        </Flex>
      </Container>
    </>
  )
}
