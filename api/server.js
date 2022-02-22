// server configs
const express = require("express");
const app = express();
const volleyball = require("volleyball");
const cors = require("cors");
const bodyParser = require("body-parser");

//passport
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");

const User = require("./models/user");
const models = require("./models");
const db = require("./db/db"); //crear base de datos/
const router = require("./routes");

// logging middleware
app.use(volleyball);
app.use(cors());
app.use(express.static("build"));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: "jr",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false); // user not found
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // invalid password
            }
            done(null, user); // success :D
          });
        })
        .catch(done);
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// How we look for the user
passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((user) => done(null, user));
});

// parsing middleware
app.use(express.urlencoded({ extended: true })); /* es true o false?????? */
app.use(express.json());
//app.use(express.json());
app.use("/", router);
app.use("/", (req, res) => {
  res.sendStatus(404);
});

/* STATIC
app.use((req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});
 */

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

db.sync({ force: false })
  .then(function () {
    // Recién ahora estamos seguros que la conexión fue exitosa
    app.listen(3001, () =>
      console.log("Servidor escuchando en el puerto 3001!!!")
    );
  })
  .catch(console.error);

module.exports = app;
