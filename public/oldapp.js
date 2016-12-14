console.log("app.js is linked");
var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

require('./config/passport')(passport);

mongoose.connect('mongodb://localhost/local-authentication-with-passport');

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

app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	next();
});


// if you get to a point that you can split routes out 
// of server.js use lines below
var routes = require('./config/routes');
app.use(routes);

app.listen(3000);