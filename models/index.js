// require and export user and loop.js figure out how to get server/router and controller to recognize index.js
console.log("index.js is included");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/loopr");


module.exports.User = require('./user.js');

// module.exports.Loop = require('./loop.js');