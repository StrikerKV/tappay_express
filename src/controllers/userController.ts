import { Request, Response } from "express";
import { UserModel } from "../models/userModel";

export const getDb = async (req: Request, res: Response) => {
  try {
    const dbConn = await UserModel.getConn();
    res.json(dbConn);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await UserModel.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
