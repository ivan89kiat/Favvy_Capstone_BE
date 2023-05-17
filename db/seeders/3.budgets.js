"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "budgets",
      [
        {
          id: 1,
          user_id: 1,
          budgetCategory_id: 1,
          amount: 600,
          balance: 99.68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          user_id: 1,
          budgetCategory_id: 4,
          amount: 300,
          balance: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          user_id: 1,
          budgetCategory_id: 7,
          amount: 100,
          balance: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          user_id: 1,
          budgetCategory_id: 13,
          amount: 300,
          balance: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          user_id: 1,
          budgetCategory_id: 9,
          amount: 300,
          balance: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("budgets", null, {});
  },
};
