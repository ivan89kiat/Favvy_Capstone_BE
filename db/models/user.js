"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
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
