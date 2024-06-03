import prismadb from "@/lib/prismadb";

export async function getVerificationTokenByToken(token: string) {
  try {
    const verificationToken = await prismadb.verificationToken.findUnique({
      where: { token },
    });
    return verificationToken;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function getVerificationTokenByEmail(email: string) {
  try {
    const verificationToken = await prismadb.verificationToken.findFirst({
      where: {
        email,
      },
    });
    return verificationToken;
  } catch (error) {
    console.error(error);
    return null;
  }
}
