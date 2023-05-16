"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "histories",
      [
        {
          id: 1,
          user_id: 1,
          category: null,
          amount: 1000,
          type: "income",
          date: "07/05/2023",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          user_id: 1,
          category: "Housing",
          amount: 500.32,
          type: "expenses",
          date: "09/05/2023",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          user_id: 1,
          category: "Transportation",
          amount: 250,
          type: "expenses",
          date: "09/05/2023",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          user_id: 1,
          category: "Insurance",
          amount: 100,
          type: "expenses",
          date: "11/05/2023",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          user_id: 1,
          category: "Entertainment",
          amount: 100,
          type: "expenses",
          date: "14/05/2023",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          user_id: 1,
          category: "Personal",
          amount: 100,
          type: "expenses",
          date: "14/05/2023",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("histories", null, {});
  },
};
