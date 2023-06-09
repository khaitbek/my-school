import { prisma } from "./../../../../../prisma/index";
import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Parol", type: "password", placeholder: "Parol" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });
        if (!user) return null;
        if (user.password !== (credentials?.password as string)) return null;
        return user;
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
