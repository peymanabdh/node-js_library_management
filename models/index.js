// import { import as dynamicImport } from 'node:node-esm-resolve';
import mysql from "mysql2";
// const fs = require("fs");
import fs from "fs";
// const path = require("path");
import path from "path";
// console.log(__dirname);
// const Sequelize = require("sequelize");
import Sequelize from "sequelize";
// const process = require("process");
import process from "process";
// const basename = path.basename(__dirname);
const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../config/config.js")[env];
import config from "../config/config.js";

const db = {};

// let sequelize;

const sequelize = new Sequelize(
  "node_library_manegment",
  "root",

  "",
  {
    host: "127.0.0.1",
    dialect: "mysql",
  }
);

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
