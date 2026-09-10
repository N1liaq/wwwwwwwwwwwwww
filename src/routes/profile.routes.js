import { Router } from "express";
import {
  createProfile,
  deleteProfile,
  getAllProfile,
  getProfileById,
  updateProfile,
} from "../controllers/profile.controller.js";

const profileRouter = Router();

profileRouter.post("/profile", createProfile);
profileRouter.get("/profile", getAllProfile);
profileRouter.get("/profile", getProfileById);
profileRouter.put("/profile", updateProfile);
profileRouter.delete("/profile", deleteProfile);
