// import prismadb from "@/lib/prismadb";
// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import { compare } from "bcrypt";
// import { handlers } from "@/auth";
// export const { GET, POST } = handlers;
// export default NextAuth({
//   providers: [
//     Credentials({
//       id: "credentials",
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing username or password");
//         }
//         const user = await prismadb.user.findUnique({
//           where: { email: credentials.email },
//         });

//         if (!user || !user.hashedPassword) {
//           throw new Error("email does not exist");
//         }
//         const isCorrectPassword = await compare(
//           credentials.password,
//           user.hashedPassword
//         );
//         if (!isCorrectPassword) {
//           throw new Error("Incorrect password");
//         }
//         return user;
//       },
//     }),
//   ],
//   debug: process.env.NODE_ENV === "development",
//   session: {
//     strategy: "jwt",
//   },
//   jwt: {
//     secret: process.env.NEXTAUTH_JWT_SECRET,
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });
export { GET, POST } from "@/auth";
