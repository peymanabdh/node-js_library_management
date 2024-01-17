import sequelize from "./index.js";
import { Model, DataTypes } from "sequelize";

  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    gender: DataTypes.ENUM('male','female'),
    address: DataTypes.TEXT,
    status: DataTypes.ENUM('1','0')
  }, {
    sequelize,
    modelName: 'User',
  });
  export default User;
