"use client";
import { User } from "@prisma/client";
import { Field, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import * as Form from '@radix-ui/react-form';
import * as z from "zod"
import { prisma } from "@db/index";
import { addUser } from "@/actions/user";
import { UserCreateInputObjectSchema, UserCreateOneSchema } from "@db/generated/schemas";
import { UserScalarFieldEnumSchema } from "@db/generated/schemas";
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
      console.log(user);
      return user;
    }
  });
  const addNewUser: SubmitHandler<User> = async (data) => {
    mutate(data);
  }
  console.log(errors);
  return (
    <div className="min-h-[90vh] flex items-center justify-center flex-grow">
      <Form.Root className="grid gap-4" onSubmit={handleSubmit(addNewUser)}>
        {inputFields.map(field => (
          <Form.Field key={field.name} className="FormField" name="email">
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your {field.label}
            </Form.Message>
            <Form.Control asChild>
              <input className="px-4 py-4 rounded-lg font-[inherit!important] border-2 border-teal-500" placeholder={field.name} autoComplete="on" id={field.name} aria-autocomplete="both" {...register(field.name)} type={field.type} />
            </Form.Control>

          </Form.Field>
        ))}
        <button style={{
          cursor: isSubmitting || isLoading ? "not-allowed" : "pointer"
        }} disabled={isSubmitting || isLoading} type="submit" className="px-4 py-4 rounded-full mt-4 font-[inherit] bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-900 transition-colors duration-300">
          {isLoading ? "Submitting" : "Submit"}
        </button>
      </Form.Root>
    </div>
  )
}
