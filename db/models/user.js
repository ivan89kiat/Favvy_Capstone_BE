"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.stockDatas, { through: models.stockDatas });
      this.hasMany(models.goals);
      this.hasMany(models.budgets, { through: models.budgetCategories });
    }
  }
  User.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      mobile: DataTypes.STRING,
      email: DataTypes.STRING,
      dobirth: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return User;
};
