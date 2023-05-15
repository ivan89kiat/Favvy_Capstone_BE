"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("stockDatas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      symbol: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      date: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      open: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      close: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("stockDatas");
  },
};
