const { prisma } = require("../prisma/service.ts");

export const createOrder = async (data: object) => {
  const order = await prisma.order.create({
    data,
    select: {
      id: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
        },
      },
      item: {
        select: {
          id: true,
          name: true,
          category: true,
          price: true,
          image_url: true,
          description: true,
        },
      },
      quantity: true,
      total: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return order;
};

export const getOrderById = async (id: number) => {
  const order = await prisma.order.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
        },
      },
      item: {
        select: {
          id: true,
          name: true,
          category: true,
          price: true,
          image_url: true,
          description: true,
        },
      },
      quantity: true,
      total: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return order;
};