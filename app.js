console.log("app.js is linked");
var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var moment		 = require('moment');
var db = require("./models");



// used in two places, here and models.index make sure connection is coverd by db =require above
// mongoose.connect('mongodb://localhost/loopr');
app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to LOOPR!",
    documentation_url: "https://github.com/kevinbloomquist/LOOPR",
    base_url: "HEROKU LINK HERE!!!!",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},

      {method: "GET", path: "/signup", descrition: "takes user to signup page with user signup form"},
      {method: "POST", path: "/signup", description:"signup form adds user to Loops.users on submit"},
      {method: "GET",  path: "/login", description: "takes user to login page with login form"},
      {method: "POST", path: "/login", description: "authenticates user on submit and redirects to /"},
      {method: "GET", path: "/", description: "retrieves a user feed of triggered loops"},
      {method: "POST", path: "/", description: "currentlyuses create form to submit loops to database(TEMP"},
      
    ]
  });
});

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser());

app.set('views','./views');
app.engine('ejs',require('ejs').renderFile);
app.set('view engine',"ejs");

app.use(express.static(__dirname + "/public"));

app.use(session({ secret: 'WDI_GENERAL...'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);
app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	next();
});


// if you get to a point that you can split routes out 
// of server.js use lines below
var routes = require('./config/routes');
app.use(routes);

// app.listen(3000);
app.listen(process.env.PORT || 3000);

