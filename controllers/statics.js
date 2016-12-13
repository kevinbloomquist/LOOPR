console.log("statics.js is included");

function home(req, res) {  
  res.render('index');
}

module.exports = {
  home: home,
};
