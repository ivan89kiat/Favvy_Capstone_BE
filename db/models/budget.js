"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.users, { through: models.budgetCategories });
    }
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
      spending: DataTypes.DECIMAL,
      balance: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "budgets",
    }
  );
  return Budget;
};
