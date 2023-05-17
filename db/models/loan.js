"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
    static associate(models) {}
  }
  Loan.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      title: DataTypes.STRING,
      interest: DataTypes.DECIMAL,
      amount: DataTypes.DECIMAL,
      tenure: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "loans",
    }
  );
  return Loan;
};
