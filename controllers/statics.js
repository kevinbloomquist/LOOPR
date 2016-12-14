console.log("statics.js is included");

function home(req, res) {  
  res.render('index.ejs');
}

module.exports = {
  home: home,
};
