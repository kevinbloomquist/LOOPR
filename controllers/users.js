console.log("users.js is included");

var passport = require("passport");
var db = require("../models");


// GET /signup
function getSignup(request,response) {
	response.render('signup.ejs', {message:request.flash('signupMessage')});
}

// POST /signup
function postSignup(request,response,next) {
	var signupStrategy = passport.authenticate('local-signup',{
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	});

	return signupStrategy(request,response,next);
}

// GET /login
function getLogin(request,response) {
	console.log(request.session);//only here for easy retrieval
	response.render('login.ejs',{message: request.flash('loginMessage')});
}

// POST /login
function postLogin(request,response,next){
	console.log("logged in as a user");
	var loginStrategy = passport.authenticate('local-login',{
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true

	});
return loginStrategy(request,response,next);
}

// GET /logout
function getLogout(request,response) {
	request.logout();
	response.redirect('/');
}

// Restricted page change to main or create for loopr.
function secret(request, response){
	console.log("secret hitt!!");
	if(authenticatedUser){
res.render('createLoop.ejs',{message: request.flash('secretMessage')});
}else response.redirect('/');

}
// GET /
function getTriggeredLoops(request,response){
	response.render('present.ejs');
	var loopList = db.Loop.find();//working here to get a response (list of loops)
	console.log(request.user);//this shows current user throws error if not logged in
	response.json();
	console.log("getTriggeredLoops hit!!!");
}
// GET /future
function getFutureLoops (request,response){
	response.render('createLoop.ejs',{message: request.flash("I don't know what this does yet")});
	console.log("getFutureLoops hit!!");
}


// POST /future
function postFutureLoop(request,response){
	db.Loop.create(request.body,function(err,loop){
		if (err) {
			console.log(err);
		}
		else {
			console.log(loop.message + "Created!");
		}
		console.log(request.user);
		console.log(request.body);
		console.log("loop:" + loop );

	});
	console.log("postFutureLoop hit!!!");
}
//DELETE /future
function deleteFutureLoop(request,response){
	console.log("inside deleteFutureLoop");
	console.log(request.params);
	db.Loop.findByIdAndRemove(request.params,function(err,loop){
	// db.Loop.remove(request.params);
		console.log(loop.id +" REMOVED!!!");
		console.log(loop);
	});
}

		


// still need to build:
// PUT /future/
// DELETE /future/
// DELETE /
	// response.render('createLoop.ejs');




module.exports = {
	getLogin: getLogin,
	postLogin: postLogin,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogout: getLogout,
	secret: secret,
	getFutureLoops: getFutureLoops, //note plurality
	postFutureLoop: postFutureLoop,
	deleteFutureLoop: deleteFutureLoop,
	getTriggeredLoops: getTriggeredLoops

};