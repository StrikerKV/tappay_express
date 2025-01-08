import { User, users } from "../models/userModel";

export const getAllUsers = (): User[] => {
  return users;
};

export const getUserById = (id: number): User | undefined => {
  return users.find(user => user.id === id);
};

export const addUser = (user: User): User => {
  users.push(user);
  return user;
};
