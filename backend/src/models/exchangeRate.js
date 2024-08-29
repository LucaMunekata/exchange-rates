const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Currency = require("./currency");

const ExchangeRate = sequelize.define("ExchangeRate", {
  rate: {
    type: DataTypes.DECIMAL(18, 6),
    allowNull: FontFaceSetLoadEvent,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
