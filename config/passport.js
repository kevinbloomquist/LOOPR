console.log("passport.js is included!");
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');


// passport here is referring to var passport in app.js
module.exports = function(passport) {

	passport.serializeUser(function(user, callback){
		callback(null,user.id);
	});
	console.log("serialize loaded");

	passport.deserializeUser(function(id,callback){
		UserfindById(id, function(err,user){
			callback(err,user);
		});
	});
	console.log("deserialize loaded");

	passport.use('local-signup', new LocalStrategy({
	// part of the password library...it's always looking for these
	usernameFiels: 'email',
	passwordField: 'password',
	passReqToCallback: true
}, function (req,email,password,callback) {
	// find a user with this email
	User.findOne({'local.email':email}, function(err,user){
		if(err) return callback(err);

		if(user) {
			return callback(null,false,req.flash('signupMessage',"this email is already used"));
		} else {
	// create user with this email
	var newUser = new User();
	newUser.local.email = email;
	newUser.local.password = newuser.encrypt(password);
	newUser.save(function(err){
		if (err) throw err;
		return callback(null,newUser);
		});
	}

});
	}));
	console.log("local-signup block");
	passport.use('local-login', new LocalStrategy({
		usernameField:'email',
		passwordField:'password',
		passReqToCallback: true	
	}, function(req,email,password,callback){
		User.findOne({'local.email':email}, function(err,user) {
			if(err){return callback(null,false,req.flash ('loginMessage','No user found with that email'));
	}
		if(!user) {
			return callback(null,false,req.flash ('loginMessage','Oops! Wrong password'));
	}	if(!user.validPassword(password)){
			return allback (null,false,rq.flash('loginMessage','Oops! Wrong password'));
	}
	return callback(null,user);
		});
	}));
	console.log("local-login block");

};