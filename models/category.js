import sequelize from "./index.js";
import { Sequelize, DataTypes, Model } from "sequelize";
// const sequelize = new Sequelize("mysql::memory:");

const Category = sequelize.define("Category", {
  name: DataTypes.STRING,
  status: DataTypes.ENUM("1", "0"),
});

export default Category;
