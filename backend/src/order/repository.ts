const { prisma } = require("../prisma/service.ts");

export const createOrder = async (data: object) => {
  const order = await prisma.order.create({
    data,
    select: {
      id: true,
      user_id: true,
      item_id: true,
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
      user_id: true,
      item_id: true,
      quantity: true,
      total: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return order;
};

export const getAllOrders = async () => {
  const orders = await prisma.order.findMany({
    select: {
      id: true,
      user_id: true,
      item_id: true,
      quantity: true,
      total: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return orders;
};