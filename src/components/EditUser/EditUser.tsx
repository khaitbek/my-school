"use client";
import { UserInputFields } from "@/app/(admin)/admin/users/new/page";
import { Box, Button, FormControl, Input, Stack, ButtonGroup } from "@chakra-ui/react";
import { UserUpdateOneSchema } from "@db/generated/schemas";
import { Role, User } from "@prisma/client";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface UserUpdate extends z.infer<typeof UserUpdateOneSchema> {

}

export function EditUser({ user }: { user: User }) {
  const { register, handleSubmit, formState: { isLoading, isValid } } = useForm<User>({
    defaultValues: {
      ...user
    }
  });
  const handleEdit: SubmitHandler<User> = async data => {
    try {
      const smth = await axios.put("/api/user", { ...data });
      toast.success("Muvaffaqqiyatli amalga oshirildi!");
    } catch (error) {
      toast.error("Nimadur xato ketdi!");
    }
  }
  return (
    <Box as="form" pt="12" onSubmit={handleSubmit(handleEdit)}>
      <Stack spacing="4">
        {UserInputFields.map(field => (
          <Input key={crypto.randomUUID()} placeholder={field.label} type={field.type} {...register(field.name)} />
        ))}
        <Button isLoading={isLoading} disabled={!isValid} type="submit">
          Malumotlarni saqlash
        </Button>
        <ToastContainer />
      </Stack>
    </Box>
  )
}
