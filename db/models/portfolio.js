"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.stockDatas);
      this.belongsTo(models.users);
    }
  }
  Portfolio.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      stockData_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "stockDatas",
          key: "id",
        },
      },
      purchase_price: DataTypes.DECIMAL,
      units: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "portfolios",
    }
  );
  return Portfolio;
};
