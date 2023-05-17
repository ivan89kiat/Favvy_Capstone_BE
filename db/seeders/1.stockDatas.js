"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "stockDatas",
      [
        {
          id: 1,
          symbol: "IBM",
          date: "05/16/2023",
          open: "123.35",
          close: "123.46",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          symbol: "AAPL",
          date: "05/16/2023",
          open: "171.99",
          close: "172.07",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          symbol: "KO",
          date: "05/16/2023",
          open: "63.89",
          close: "63.22",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stockDatas", null, {});
  },
};
