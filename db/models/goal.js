"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Goal extends Model {
    static associate(models) {
      // this.hasMany(models.users);
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
      target_expenses: DataTypes.STRING,
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
