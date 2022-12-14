const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Favorites extends Model {}

Favorites.init(
    {
       show: {
        type: DataTypes.STRING,
        allowNull: false
       } 
    },
    { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;