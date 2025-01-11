import { Router } from "express";
import { getUsers, createUser, getDb } from "../controllers/userController";

const router = Router();

router.get("/db", getDb);
router.get("/", getUsers);
router.post("/", createUser);

export default router;
