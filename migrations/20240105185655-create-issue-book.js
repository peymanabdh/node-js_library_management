'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IssueBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      bookId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"Books"
          },
          key:"id"
        },
        allowNull:false
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"Users"
          },
          key:"id"
        },
        allowNull:false
      },
      days_issued: {
        type: Sequelize.INTEGER(20),
        allowNull:false
      },
      issued_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      is_returned: {
        type: Sequelize.ENUM('0','1'),
        defaultValue:'0'
      },
      returned_date: {
        type: Sequelize.DATE,
        allowNull:true
      },
      status: {
        type: Sequelize.ENUM('0','1'),
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
    await queryInterface.dropTable('IssueBooks');
  }
};