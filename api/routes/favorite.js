const express = require("express");
const router = express.Router();
const Favorite = require("../models/favorite");
const User = require("../models/user");

//agrego un favorito a user
router.post("/", (req, res) => {
  Favorite.create({
    title: req.body.title,
    userId: req.body.userId,
    movieId: req.body.movieId,
  })
    .then((favMovie) => {
      const user = req.body.user;
      favMovie.setUser(user);
    })
    .then(() => res.sendStatus(204))
    .catch((err) => res.send(err));
});

// muestro los favoritos de un usuario

router.get("/:id", (req, res) => {
  Favorite.findAll({ where: { userId: req.params.id } })
    .then((fav) => {
      res.send(fav);
    })
    .catch((err) => res.send(err));
});

//elimino un favorito de user
/* router.delete("/delete/:id", (req, res) => {
  Favorite.findOne({ where: { userId: req.params.id } })
    .then(() => Favorite.destroy({ where: { movieId: req.body.movieId } }))
    .then(() => res.sendStatus(200))
    .catch((err) => res.send(err));
});
 */

router.delete("/delete/:id/:movieId", (req, res) => {
  Favorite.destroy({
    where: { userId: req.params.id, movieId: req.params.movieId },
  })
    .then(() => res.sendStatus(200))
    .catch((err) => res.send(err));
});
module.exports = router;
