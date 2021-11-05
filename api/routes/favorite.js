const express = require("express");
const router = express.Router();
const Favorite = require("../models/favorite");


// trae todos los favoritos de un usuario

router.get("/favorite/:id", (req, res, next) => {
    Favorite.findAll({ where: { id: req.params.id } })
      .then((fav) => {
        res.send(fav);
      })
      .catch(next);
  });

module.exports = router