"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BudgetCategory extends Model {
    static associate(models) {}
  }
  BudgetCategory.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "budgetCategories",
    }
  );
  return BudgetCategory;
};
