'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull:false
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"Categories"
          },
          key:"id"
        },
        allowNull:false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull:true
      },
      amount: {
        type: Sequelize.INTEGER(20),
        allowNull:false
      },
      cover_image: {
        type: Sequelize.STRING(220),
        allowNull:false
      },
      author: {
        type: Sequelize.STRING(200),
        allowNull:true
      },
      status: {
        type: Sequelize.ENUM('1','0'),
        defaultValue:'1'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};