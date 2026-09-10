import { Router } from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticle,
  getArticleById,
  updateArticle,
} from "../controllers/article.controller.js";

const articleRouter = Router();

articleRouter.post("/article", createArticle);
articleRouter.get("/article", getAllArticle);
articleRouter.get("/article", getArticleById);
articleRouter.put("/article", updateArticle);
articleRouter.delete("/article", deleteArticle);
