const { generateToken } = require("../config/tokens");
const { User, Favorites } = require("../models");

const createUser = (req, res) => {
  User.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(err => console.error(err));
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } }).then(user => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then(isValid => {
      if (!isValid) return res.sendStatus(401);
      const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        dateOfBirth: user.dateOfBirth
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  });
};

const logOutUser = (req, res) => {
  res.clearCookie("token").sendStatus(204);
};

const addFav = (req, res) => {
  const { show } = req.body;
  User.findOne({ where: req.user })
    .then(user => {
      Favorites.findOrCreate({ where: { show } }).then(result => {
        const fav = result[0];
        fav.addUser(user);
        res.send(fav);
      });
    })
    .catch(err => console.error(err));
};

const getUsers = (req, res) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(err => console.error(err));
};

const getSingleUser = (req, res) => {
  User.findOne({where:{id:req.params.id}})
    .then(user=>res.send(user))
    .catch(err => console.error(err));
}

module.exports = { createUser, loginUser, logOutUser, addFav, getUsers, getSingleUser };
