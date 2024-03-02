import {
  getById as getByIdRepository,
  getAll as getAllRepository,
} from "./repository";

export const getItemById = async (itemId: number) => {
  try {
    const item = await getByIdRepository(itemId);
    return item;
  } catch (e) {
    throw e;
  }
};

export const getAllItems = async () => {
  try {
    const items = await getAllRepository();
    return items;
  } catch (e) {
    throw e;
  }
};
