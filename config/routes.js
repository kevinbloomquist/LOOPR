console.log("routes.js is included");
var express = require('express');
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
// var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');

function authenticatedUser(req,res,next) {
	// if Auth
	if(req.isAuthenticated()) return next();
	// if not, beat it nerd
	res.redirect('/');
}

router.route('/')
.get(staticsController.home);

router.route('/signup')
.get(usersController.getSignup)
.post(usersController.postSignup);

router.route('/login')
.get(usersController.getLogin)
.post(usersController.postLogin);

router.route("/logout")
.get(usersController.getLogout);

router.route("/future")
.get(usersController.getFutureLoops)
.post(usersController.postFutureLoop) ;//*controller function not yet built
// .put(usersController.editFutureLoop) * will require a find/ change/ return on submit of some kind
// .delete(usersController.deleteFutureLoop); *controller function not yet built

router.route("/present")
.get(usersController.getTriggeredLoops);


router.route('/secret')
// when /secret gets hit run controller
.get(authenticatedUser,usersController.secret);

module.exports = router;