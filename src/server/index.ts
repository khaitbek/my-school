import { getServerSession } from "next-auth";
import { publicProcedure, router } from './trpc';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const appRouter = router({
  session: publicProcedure.query(async () => {
    const session = await getServerSession(authOptions);
    return session
  }),
  // createUser: publicProcedure.mutation()
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;