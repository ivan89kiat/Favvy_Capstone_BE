"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "portfolios",
      [
        {
          id: 1,
          user_id: 1,
          stockData_id: 1,
          purchasePrice: 103.75,
          units: 568,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          user_id: 1,
          stockData_id: 2,
          purchasePrice: 142.85,
          units: 312,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          user_id: 1,
          stockData_id: 3,
          purchasePrice: 58.2,
          units: 1350,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("portfolios", null, {});
  },
};
