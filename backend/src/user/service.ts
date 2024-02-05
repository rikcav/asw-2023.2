import {
  createUser as createUserRepository,
  getById as getByIdRepository,
} from "./repository";
import { userValidation } from "./validation";

export const createUser = async (userData: any) => {
  try {
    const data = await userValidation.parse(userData);
    const user = await createUserRepository(data);
    return user;
  } catch (e) {
    throw e;
  }
};

export const getUserById = async (userId: number) => {
  try {
    const user = await getByIdRepository(userId);
    return user;
  } catch (e) {
    throw e;
  }
};
