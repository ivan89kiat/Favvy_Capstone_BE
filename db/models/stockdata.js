"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StockData extends Model {
    static associate(models) {
      this.hasMany(models.portfolios, { foreignKey: "stockData_id" });
    }
  }
  StockData.init(
    {
      symbol: DataTypes.STRING,
      date: DataTypes.STRING,
      open: DataTypes.STRING,
      close: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "stockDatas",
    }
  );
  return StockData;
};
