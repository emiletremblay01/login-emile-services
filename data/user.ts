import prismadb from "@/lib/prismadb";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prismadb.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch {
    return null;
  }
};

export const isNipOk = async (nip: string, origin: string) => {
  try {
    const user = await prismadb.user.findFirst({
      where: {
        websites: {
          some: {
            url: {
              equals: origin,
              mode: "insensitive", // Enable case-insensitive search
            },
          },
        },
      },
    });

    const website = user?.websites.find((website) => {
      if (website.url === origin) {
        return website;
      }
    });

    return website?.nip === nip;
  } catch (error) {
    console.log(error);
    return false;
  }
};
