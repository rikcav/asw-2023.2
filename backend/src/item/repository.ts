const { prisma } = require("../prisma/service.ts");

export const getById = async (id: number) => {
  const item = await prisma.item.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      category: true,
      price: true,
      image_url: true,
      description: true,
    },
  });

  return item;
};

export const getAll = async () => {
  const items = await prisma.item.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      price: true,
      image_url: true,
      description: true,
    },
  });

  return items;
};
