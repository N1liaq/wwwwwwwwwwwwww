import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const ArticleModel = sequelize.define("Article", {
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT(50),
    allowNull: false,
  },
  excerpt: {
    type: DataTypes.STRING(500),
  },
  status: {
    type: DataTypes.ENUM("published", "archived"),
    defaultValue: "published",
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: "User",
      key: "id",
    },
  },
});

Article.belongsToMany(Tag, {
  through: "ArticleTag",
  as: "tags",
});

Tag.belongsToMany(Article, {
  through: "ArticleTag",
  as: "articles",
});
