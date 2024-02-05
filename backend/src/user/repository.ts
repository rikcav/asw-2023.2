const { prisma } = require("../prisma/service.ts");

export const createUser = async (data: object) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
    },
  });

  return user;
};

export const getById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
    },
  });

  return user;
};
