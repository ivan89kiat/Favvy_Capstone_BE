"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "budgetCategories",
      [
        {
          id: 1,
          name: "Housing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Food",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Utilities",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Transportation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Clothing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "Healthcare",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: "Insurance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: "Household",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: "Personal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: "Debt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          name: "Retirement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          name: "Education",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          name: "Entertainment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          name: "Gifts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          name: "Miscellanous",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("budgetCategories", null, {});
  },
};
