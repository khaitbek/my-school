"use client";
import * as z from "zod";
import { User } from "@prisma/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "@/actions/user";
import { UserCreateInputObjectSchema } from "@db/generated/schemas";
import { UserScalarFieldEnumSchema } from "@db/generated/schemas";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react";
interface InputField {
  name: z.infer<typeof UserScalarFieldEnumSchema>,
  label: string,
  type: string
};
const inputFields: InputField[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "phoneNumber",
    label: "Phone number",
    type: "tel",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
  },
  {
    name: "birthOfDate",
    label: "Birth of Date",
    type: "text",
  },
  {
    name: "description",
    label: "Bio",
    type: "text",
  },
  {
    name: "job",
    label: "Job",
    type: "text",
  },
  {
    name: "image",
    label: "Profile image",
    type: "url",
  }
];

export default function NewUser() {
  const { register, formState: { errors, isValid, isSubmitting }, handleSubmit, reset } = useForm<User>({
    mode: "all",
    resolver: zodResolver(UserCreateInputObjectSchema)
  });
  const { mutate, isError, isLoading } = useMutation({
    mutationKey: ["users", "new"],
    mutationFn: async (data: User) => {
      const user = await addUser(data);
      return user;
    }
  });
  const addNewUser: SubmitHandler<User> = async (data) => {
    mutate(data);
  }
  return (
    <Box minH="100dvh" display="flex" alignItems="center" justifyContent="center">
      <Box display="grid" gap="4" as="form" onSubmit={handleSubmit(addNewUser)}>
        {inputFields.map(field => (
          <FormControl key={field.name}>
            <Input fontFamily="inherit" placeholder={field.name} autoComplete="on" id={field.name} aria-autocomplete="both" {...register(field.name)} type={field.type} />
            {errors[field.name]?.message !== null && <FormErrorMessage>
              {errors[field.name]?.message}
            </FormErrorMessage>}
          </FormControl>
        ))}
        <Button isLoading={isLoading} disabled={isSubmitting || isLoading} type="submit">
          {isLoading ? "Submitting" : "Submit"}
        </Button>
      </Box>
    </Box>
  )
}

export {
  inputFields as UserInputFields
}