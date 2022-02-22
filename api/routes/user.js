const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");

router.get("/:id", (req, res, next) => {
  res.send("USER!!!");
});

// Crea un usuario
router.post("/register", (req, res, next) => {
  console.log("REQ.BODY", req.body);
  User.create(req.body)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
});

// traigo todos los usuarios
router.get("/users", (req, res, next) => {
    User.findAll()
    .then((users) => res.send(users))
}) 

// passport login
router.post("/login", passport.authenticate("local"), function (req, res) {
  res.send(req.user);
});

// me desloguea
router.post("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200);
});

//retorna el usuario logueado
router.get("/me", (req, res) => {
  console.log(req.user);
  if (!req.user) return res.sendStatus(401);

  res.send(req.user); 
});

module.exports = router;
