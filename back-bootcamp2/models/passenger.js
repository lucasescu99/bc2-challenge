const S = require("sequelize");
const sequelize = require("../db");

class Passenger extends S.Model {}

Passenger.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      unique: true,
    },
    code: {
      type: S.STRING(5),
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [5]
      }
    }
  },
  { sequelize, modelName: "passenger" }
);

module.exports = { Passenger };
