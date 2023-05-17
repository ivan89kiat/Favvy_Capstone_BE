"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    static associate(models) {}
  }
  Budget.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      budgetCategory_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "budgetCategories",
          key: "id",
        },
      },
      amount: DataTypes.DECIMAL,
      balance: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "budgets",
    }
  );
  return Budget;
};
