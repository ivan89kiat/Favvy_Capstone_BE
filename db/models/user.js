"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // this.belongsToMany(models.budgetCategories, {
      //   through: models.histories,
      // });
      // this.hasMany(models.histories, { as: "user" });
      // this.hasMany(models.stockDatas, { through: models.stockDatas });
      // this.belongsTo(models.goals);
      // this.hasMany(models.budgets, { through: models.budgetCategories });
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
