"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "goals",
      [
        {
          id: 1,
          user_id: 1,
          retirement_age: "65",
          target_expenses: "1500",
          est_inflation: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("goals", null, {});
  },
};
