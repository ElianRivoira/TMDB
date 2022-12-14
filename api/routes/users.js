const express = require("express");
const router = express.Router();
const { validateAuth } = require("../utils/auth");

const {
  createUser,
  loginUser,
  logOutUser,
  addFav,
  getUsers,
  getSingleUser
} = require("../controllers/users");

router.post("/", createUser);

router.post("/login", loginUser);

router.post("/logout", logOutUser);

router.get("/", getUsers);

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

router.post("/addFav", validateAuth, addFav);

router.get("/search/:id", getSingleUser)

router.get("/", (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
