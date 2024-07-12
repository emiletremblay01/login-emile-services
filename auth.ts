import prismadb from "@/lib/prismadb";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";

import { LoginSchema } from "@/schemas";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) {
          return null;
        }

        const { email, password } = validatedFields.data;

        const user = await getUserByEmail(email);
        if (!user || !user.password) {
          return null;
        }

        const passwordsMatch = password === user.password;

        if (!passwordsMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
  adapter: PrismaAdapter(prismadb),
  session: {
    strategy: "jwt",
  },
  // callbacks: {
  //   async signIn({ user, account }) {
  //     if (account?.provider !== "credentials") {
  //       return true;
  //     }

  //     const existingUser = await getUserById(user.id || "");
  //     if (!existingUser?.emailVerified) {
  //       return false;
  //     }
  //     return true;
  //   },
  //   async session({ session, token }) {
  //     if (token.sub && session.user) {
  //       session.user.id = token.sub;
  //     }

  //     if (token.role && session.user) {
  //       session.user.role = token.role as UserRole;
  //     }
  //     return session;
  //   },

  //   async jwt({ token }) {
  //     if (!token.sub) {
  //       return token;
  //     }
  //     const existingUser = await getUserById(token.sub);

  //     if (!existingUser) {
  //       return token;
  //     }

  //     token.role = existingUser.role;

  //     return token;
  //   },
  // },
});
