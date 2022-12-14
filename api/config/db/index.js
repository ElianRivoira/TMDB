const Sequelize = require("sequelize");

const db = new Sequelize('tmdb', 'Elian', '3214', {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  logging: false
});

module.exports = db;