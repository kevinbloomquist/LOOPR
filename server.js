// Requirements:
// models
var db = require("./models");
// Express
var express = require('express');
// Generate a new express app called app
var app = express();
// body-parser - parses respose info from post
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
// Serve static files from /public
app.use(expres.static(__dirname + '/public'));
// Used to manipulate POST methods
var methodOverride = require('method-override');
// So we can use passport
var passport = require("passport");

/*use if rouste are split out into their own folder*/
// var router = express.Router();

// use if controllers are split out into their own folder
// var usersController = require('../controllers/users');
// var staticsController = require('../controllers/statics');


/*********
* ROUTES *
*********/

// Endpoints:
// HTML Endpoints:

/*Taken from passport routes.js to 61 "end adjust for loopr"*/
// function authenticatedUser(req,res,next) {
// 	// if authenticated, continue
// 	if(req.isAuthenticated()) return next();
// 	// if not,go home dude
// 	res.redirect('/');
// }



// router.route('/')
//   .get(staticsController.home);

// router.route('/signup')
//   .get(usersController.getSignup)
//   .post(usersController.postSignup);

// router.route('/login')
//   .get(usersController.getLogin)
//   .post(usersController.postLogin);

// router.route("/logout")
//   .get(usersController.getLogout);


// router.route('/secret')
// .get(authenticatedUser,usersController.secret);
// module.exports = router;
// end adjust for loopr

// JSON API Endpoints:

// add heroku link below when set-up
app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to LOOPR!",
    documentation_url: "https://github.com/kevinbloomquist/LOOPR",
    base_url: "HEROKU LINK HERE!!!!",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});



/*********
* SERVER *
*********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});