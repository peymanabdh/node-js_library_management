'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Daysetting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Daysetting.init({
    total_days: DataTypes.INTEGER,
    status: DataTypes.ENUM('1','0')
  }, {
    sequelize,
    modelName: 'Daysetting',
  });
  return Daysetting;
};