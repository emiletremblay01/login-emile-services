import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prismadb from "@/lib/prismadb";
export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  adapter: PrismaAdapter(prismadb),
  providers: [GitHub],
});
