const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Janeal0y",
  database: "node-complete",
  connectionLimit: 10,
});

module.exports = pool.promise();