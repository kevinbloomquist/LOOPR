console.log("index.js is included");

var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/loopr");


module.exports.User = require('./user.js');

module.exports.Loop = require('./loop.js');