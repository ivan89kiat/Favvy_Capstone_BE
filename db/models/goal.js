"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Goal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.users, { as: "financial_goal" });
    }
  }
  Goal.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      retirement_age: DataTypes.STRING,
      est_inflation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "goals",
    }
  );
  return Goal;
};
