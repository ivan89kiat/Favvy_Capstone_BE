"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BudgetCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.budgets);
      this.belongsTo(models.users);
    }
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
