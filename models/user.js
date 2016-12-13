console.log("models/user.js is included");
var mongoose = require ('mongoose');
var bcrypt = require('bcrypt-nodejs');

var user = mongoose.Schema({
	local: {
		email      :String,
		password   :String,
		loops:[loopSchema] 
	}
});

User.methods.encrypt = function(password) {
	return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};

User.methods.validPassword = function(password) {
// local.password is the exploded salt & hash
return bcrypt.compareSync(password,this.local.password); 
};

module.exports = mongoose.model('User',User);