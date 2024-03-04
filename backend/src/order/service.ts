import {
    createOrder as createOrderRepository,
    getOrderById as getOrderByIdRepository,
} from "./repository";

export const createOrder = async (data: object) => {
    try {
        const order = await createOrderRepository(data);
        return order;
    } catch (e) {
        throw e;
    }
};
