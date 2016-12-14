console.log("users.js is included");

var passport = require("passport");


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
	response.render('login.ejs',{message: request.flash('loginMessage')});
}

// POST /login
function postLogin(request,response,next){
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
	if(authenticatedUser){
res.render('secret.ejs',{message: request.flash('secretMessage')});
}else response.redirect('/');

}


module.exports = {
	getLogin: getLogin,
	postLogin: postLogin,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogout: getLogout,
	secret: secret

};