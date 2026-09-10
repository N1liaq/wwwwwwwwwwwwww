import { Router } from "express";
import {
  createArticleTag,
  deleteArticleTag,
  getAllArticleTag,
  getArticleTagById,
  updateArticleTag,
} from "../controllers/article.tag.controller.js";

const articleTagRouter = Router();

articleTagRouter.post("/articleTag", createArticleTag);
articleTagRouter.get("/articleTag", getAllArticleTag);
articleTagRouter.get("/articleTag", getArticleTagById);
articleTagRouter.put("/articleTag", updateArticleTag);
articleTagRouter.delete("/articleTag", deleteArticleTag);
