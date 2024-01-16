import Category from "./category.js";
import sequelize from "./index.js";
import { Model, DataTypes } from "sequelize";
const Book = sequelize.define("Book", {
  name: DataTypes.STRING,
  categoryId: DataTypes.INTEGER,
  description: DataTypes.TEXT,
  amount: DataTypes.INTEGER,
  cover_image: DataTypes.STRING,
  author: DataTypes.STRING,
  status: DataTypes.ENUM("1", "0"),
});
Book.associate = function (models) {
  Book.belongsTo(Category);
};
// class Book extends Model {
//   static associate(models) {
//      define association here
//     Book.belongsTo(models.Category);
//   }
// }
// Book.init(
//   {
//     name: DataTypes.STRING,
//     categoryId: DataTypes.INTEGER,
//     description: DataTypes.TEXT,
//     amount: DataTypes.INTEGER,
//     cover_image: DataTypes.STRING,
//     author: DataTypes.STRING,
//     status: DataTypes.ENUM("1", "0"),
//   },
//   {
//     sequelize,
//     modelName: "Book",
//   }
// );

export default Book;
