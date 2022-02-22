const Sequelize = require("sequelize");

const db = require("../db/db");

//-- Modelo Users
class Favorite extends Sequelize.Model {}
Favorite.init(
  {
    title: {
      type: Sequelize.STRING,
    },
    movieId:{
      type: Sequelize.STRING,
    }
    
  },
  { sequelize: db, modelName: "favorite" }
);

module.exports = Favorite;
