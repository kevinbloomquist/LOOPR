console.log("statics.js is included");
var db = require("../models");

function home(req, res) {  
  //res.render('index.ejs');//somehow add db.loops.find here;
db.Loop.find({}, function(err,loops){
res.render('index.ejs',{loops:loops});

});
}

module.exports = {
  home: home,
};
