const { User, Favorites } = require("../models");

const getFavorites = (req, res) => {
  User.findOne({ include: Favorites, where: req.user })
    .then(user => res.send(user.favorites))
    .catch(err => console.error(err));
};

const getFavoritesWithId = (req, res) => {
  User.findOne({ include: Favorites, where: {id:req.params.id} })
    .then(user => res.send(user.favorites))
    .catch(err => console.error(err));
};

const deleteFavorite = (req, res) => {
  User.findOne({ where: req.user })
    .then(user => {
      Favorites.findOne({ where: { id: req.params.id } })
        .then(fav => {
          user.removeFavorites(fav);
          res.send(fav);
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
};

module.exports = { getFavorites, deleteFavorite, getFavoritesWithId };
