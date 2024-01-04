const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Janeal0y", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
