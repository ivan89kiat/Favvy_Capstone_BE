"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "loans",
      [
        {
          id: 1,
          user_id: 1,
          title: "Housing Loan",
          interest: 2.5,
          amount: 150000,
          tenure: 120,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          user_id: 1,
          title: "Personal Loan",
          interest: 7.56,
          amount: 12000,
          tenure: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("loans", null, {});
  },
};
