import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const database = process.env.DB;
const usuarioDB = process.env.USUARIODB;
const contraDB = process.env.CONTRASEÑADB;
const hostDB = process.env.HOSTDB;
const dialectDB = process.env.DIALECTDB;
export const sequelize = new Sequelize(database, usuarioDB, contraDB, {
  host: hostDB,
  dialect: dialectDB,
});

export const startDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Conexión a la BD esta lista.");
  } catch (error) {
    console.error("No se pudo conectar a la BD", error);
  }
};
