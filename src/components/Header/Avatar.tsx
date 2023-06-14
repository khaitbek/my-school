import {
  Avatar, Menu, MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@/components/chakra";
import { Role } from "@prisma/client";
import { FaUser } from "react-icons/fa";
import { LogOutButton } from "./AuthLink";
import Link from "next/link";

export default function UserAvatar({ user }: {
  user: {
    role: Role;
  } & {
    name?: string;
    email?: string;
    image?: string;
  }
}) {
  return (
    <Menu>
      <MenuButton>
        <Avatar name={user.name[0]} src={user.image} />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Button rightIcon={<FaUser />}>
            <Link href="/profile">
              Profil
            </Link>
          </Button>
        </MenuItem>
        <MenuItem>
          <LogOutButton />
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
