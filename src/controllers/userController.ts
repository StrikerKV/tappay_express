import { Request, Response } from "express";
import { getAllUsers, getUserById, addUser } from "../services/userService";

export const getUsers = (req: Request, res: Response): void => {
  res.json(getAllUsers());
};

export const getUser = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const user = getUserById(id);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  res.json(user);
};

export const createUser = (req: Request, res: Response): void => {
  const { id, name, email } = req.body;
  const newUser = addUser({ id, name, email });
  res.status(201).json(newUser);
};
