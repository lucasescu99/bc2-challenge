const db = require("../db");

const { Passenger } = require("./passenger");
const { Package } = require("./package");

Package.belongsTo(Passenger);
Passenger.hasMany(Package);

module.exports = { db, Package, Passenger };
