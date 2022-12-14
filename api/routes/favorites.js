const express = require("express");
const router = express.Router();
const { validateAuth } = require("../utils/auth");
const {getFavorites, deleteFavorite, getFavoritesWithId} = require("../controllers/favorites")

router.get("/", validateAuth, getFavorites);

router.get("/:id", validateAuth, getFavoritesWithId);

router.delete("/:id", validateAuth, deleteFavorite);

module.exports = router;
