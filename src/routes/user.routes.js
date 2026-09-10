import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/tag", createUser);
userRouter.get("/tag", getAllUser);
userRouter.get("/tag", getUserById);
userRouter.put("/tag", updateUser);
userRouter.delete("/tag", deleteUser);
