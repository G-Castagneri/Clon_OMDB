const express = require("express");
const router = express.Router();
const user = require("./user");
const favorite = require("./favorite");


router.use("/user", user);
router.use("/favorite", favorite);

router.get("/", (req, res, next) => {
    res.send("estoy en index");
  });

 

module.exports = router;
