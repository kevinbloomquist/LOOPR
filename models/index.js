// require and export user and loop.js

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

module.exports.User = require('./user.js');

module.exports.Loop = require('./loop.js');