var mongoose = require ('mongoose');
var bcrypt = require('bcrypt-nodejs');
var db = require("./models");

db.User.create({
	local: {
		email      :String,
		password   :String,
		// loops:[loopSchema] 
	}
});

module.exports = mongoose.model('User',User);
module.exports = mongoode.model('Loop',User);

