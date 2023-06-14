"use client";
import { deleteUser } from "@/actions/user";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

interface Props {
  userId: string;
}

export default function AdminButtons({ userId }: Props) {
  const router = useRouter();
  return (
    <>
      <IconButton aria-label="Delete user" onClick={async () => {
        try {
          await deleteUser({ id: userId });
          toast.success("O'chirildi!");
        } catch (error) {
          toast.error("Xatolik!");
        }
      }} colorScheme="red" icon={<FaTrash />} />
      <IconButton aria-label="Edit user" onClick={() => {
        router.push("/profile/" + userId);
      }} colorScheme="green" icon={<FaEdit />} />
      <ToastContainer />
    </>
  )
}