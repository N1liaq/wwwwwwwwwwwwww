import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { startDB } from "./src/config/database.js";
import cookieParser from "cookie-parser";

config();
const app = express();
const portDB = process.env.PORTDB;
const origin = process.env.ORIGIN;
app.use(express.json());
app.use(
  cors({
    origin: origin,
    credentials: true,
  }),
);
app.use(cookieParser());

app.listen(portDB, async () => {
  await startDB();
  console.log("servidor encendido");
});
