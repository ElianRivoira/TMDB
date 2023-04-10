const Sequelize = require("sequelize");

const db = new Sequelize(process.env.db, process.env.username, process.env.password, {
  dialect: "postgres",
  host: process.env.hostname,
  port: process.env.port,
  logging: false
});

module.exports = db;