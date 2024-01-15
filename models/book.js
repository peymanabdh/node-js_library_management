import Category from "./category.js";
import sequelize from "./index.js";
import { Model, DataTypes } from "sequelize";

class Book extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    //console.log('Category associated with: Product');
    //Book.belongsTo(models.Category);
   // Book.belongsTo(Category, {foreignKey: 'categoryId' });
  }
}
Book.init(
  {
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    amount: DataTypes.INTEGER,
    cover_image: DataTypes.STRING,
    author: DataTypes.STRING,
    status: DataTypes.ENUM("1", "0"),
  },
  {
    sequelize,
    modelName: "Book",
  }
);

export default Book;
