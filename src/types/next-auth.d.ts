import NextAuth, { DefaultSession } from "next-auth"

export type Role = "ADMIN" | "USER"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      role: Role
    } & DefaultSession["user"]
  }
}