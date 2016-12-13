// Requirements:
// models
var db = require("./models");
// Express
var express = require('express');
// Generate a new express app called app
var app = express();
// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
// Serve static files from /public
app.use(expres.static(__dirname + '/public'));

/*********
* ROUTES *
*********/

// Endpoints:
// HTML Endpoints:

// JSON API Endpoints:


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