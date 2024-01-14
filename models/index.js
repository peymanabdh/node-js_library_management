import Sequelize from "sequelize";
// const process = require("process");
import process from "process";
import dotenv from "dotenv"
dotenv.config()
// const basename = path.basename(__dirname);
const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../config/config.js")[env];

const db = {};

// let sequelize;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,
  process.env.DB_PASWORD, {
  host: process.env.DB_HOST,
  dialect:process.env.DB_DIALECT,
});

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
try {
  await sequelize.authenticate();
  console.log("Database connection established.");
} catch (e) {
  console.log("Database connection failed", e);
  process.exit(1);
}
// module.exports = db;
export default sequelize;
