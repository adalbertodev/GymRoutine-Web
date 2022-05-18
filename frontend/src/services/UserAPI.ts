import User from '../models/User';
import { deleteById, deleteByObject, get, getById, post } from './RoutineAPI';

export const getUsers = async (): Promise<User[]> => {
  return await get<User>('users');
};

export const getUserById = async (id: string): Promise<User> => {
  return (await getById<User>('users', id)) as User;
};

export const postUser = async (user: User): Promise<number> => {
  return post<User>('users', user);
};

export const deleteUserById = async (id: string): Promise<number> => {
  return deleteById<User>('users', id);
};

export const deleteUser = async (user: User): Promise<number> => {
  return deleteByObject<User>('users', user);
};
