// UNFINISHED!!!!! see lines 7-13
console.log("loop.js is included");

var mongoose = require ('mongoose');
var moment	 = require('moment');

var Loop = mongoose.Schema({
date: Date,
time: String,//"maybe something like date.hh:date.mm research moment",
message: String,
fuseDate: Date,
fuseTime:String,//"format like above",
fuseLat: Number,
fuseLong: Number,
image:String
});

module.exports = mongoose.model('Loop',Loop);