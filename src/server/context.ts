import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getSession(opts.req);

}