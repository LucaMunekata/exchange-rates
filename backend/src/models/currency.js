const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Currency = sequelize.define(
  "Currency",
  {
    code: {
      type: DataTypes.STRING(3),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "currencies",
  }
);

module.exports = Currency;
