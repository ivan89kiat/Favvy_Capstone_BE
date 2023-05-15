"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StockData extends Model {
    static associate(models) {
      this.belongsToMany(models.users, { through: models.portfolios });
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
