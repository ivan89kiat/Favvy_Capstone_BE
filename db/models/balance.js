"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Balance extends Model {
    static associate(models) {}
  }
  Balance.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      amount: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "balances",
    }
  );
  return Balance;
};
