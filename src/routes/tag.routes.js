import { Router } from "express";
import {
  createTag,
  deleteTag,
  getAllTag,
  getTagById,
  updateTag,
} from "../controllers/tag.controller.js";

const tagRouter = Router();

tagRouter.post("/tag", createTag);
tagRouter.get("/tag", getAllTag);
tagRouter.get("/tag", getTagById);
tagRouter.put("/tag", updateTag);
tagRouter.delete("/tag", deleteTag);
