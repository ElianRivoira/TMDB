const User = require("./User");
const Favorites = require("./Favorites");

User.belongsToMany(Favorites, { through: 'user_favorites' });
Favorites.belongsToMany(User, { through: 'user_favorites' });

module.exports = { User, Favorites };
