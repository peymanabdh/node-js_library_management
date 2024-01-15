// import sequelize from "./index.js";
// import { Sequelize, DataTypes, Model } from "sequelize";
// // const sequelize = new Sequelize("mysql::memory:");

// const Category = sequelize.define("Category", {
//   name: DataTypes.STRING,
//   status: DataTypes.ENUM("1", "0"),
// });

// export default Category;
import sequelize from "./index.js";
import { Model, DataTypes } from "sequelize";

class Category extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Category.init(
  {
    name: DataTypes.STRING,
    status: DataTypes.ENUM("1", "0"),
  },
  {
    sequelize,
    modelName: "Category",
  }
);

export default Category;
