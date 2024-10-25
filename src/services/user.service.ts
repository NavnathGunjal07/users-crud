import { User, IUser } from "../model/user.model";

export const getUsers = async (): Promise<IUser[]> => User.find();
export const getUserById = async (id: string): Promise<IUser | null> => User.findById(id);
export const createUser = async (user: IUser): Promise<IUser> => User.create(user);
export const updateUser = async (id: string, data: Partial<IUser>): Promise<IUser | null> =>
  User.findByIdAndUpdate(id, data, { new: true });
export const deleteUser = async (id: string): Promise<IUser | null> => User.findByIdAndDelete(id);
