const User = require("./user");
const Favorite = require("./favorite");

User.hasMany(Favorite);
Favorite.belongsTo(User);

module.exports = { User, Favorite };
