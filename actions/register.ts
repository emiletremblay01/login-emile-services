"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

import prismadb from "@/lib/prismadb";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { email, password, name } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await prismadb.user.create({
    data: {
      email,
      password,
      name,
    },
  });

  return { success: "User created!" };
};
