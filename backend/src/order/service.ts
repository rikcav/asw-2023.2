import {
    createOrder as createOrderRepository,
    getOrderById as getOrderByIdRepository,
    getAllOrders as getAllOrdersRepository,
} from "./repository";

export const createOrder = async (data: object) => {
    try {
        const order = await createOrderRepository(data);
        return order;
    } catch (e) {
        throw e;
    }
};

export const getOrderById = async (id: number) => {
    try {
        const order = await getOrderByIdRepository(id);
        return order;
    } catch (e) {
        throw e;
    }
};

export const getAllOrders = async () => {
    try {
        const orders = await getAllOrdersRepository();
        return orders;
    } catch (e) {
        throw e;
    }
};