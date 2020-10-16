const S = require("sequelize");
const sequelize = require("../db");

class Package extends S.Model {}

Package.init(
  {
    category: {
      type: S.INTEGER,
      validate: {
        isIn: [[1, 2, 3]]
      },
      allowNull: false
    },
    type: {
      type: S.VIRTUAL,
      get() {
        if (this.getDataValue("category") === 3) return "Grande";
        else if (this.getDataValue("category") === 2) return "Pequeño";
        else return "Prenda";
      }
    }
  },
  { sequelize, modelName: "package" }
);

module.exports = { Package };
