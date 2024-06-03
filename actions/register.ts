"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import prismadb from "@/lib/prismadb";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await prismadb.user.create({
    data: {
      email,
      hashedPassword: hashedPassword,
      name,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  return { success: "Confirmation email sent!" };
};
