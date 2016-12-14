$(document).ready(function(){
	$(".createPage form").submit (function(event){
	var date = $('#date').val();
	var time = $('#time').val();//"maybe something like date.hh:date.mm research moment",
	var message = $('#message').val();
	var fuseDate = $('#fuseDate').val();
	var fuseTime = $('#fuseTime').val();//"format like above",
	var fuseLat = $('#fuseLat').val();
	var fuseLong = $('#fuseLong').val();
	
	var loopIn = {
"date": date,
"time": time,//"maybe something like date.hh:date.mm research moment",
"message": message,
"fuseDate": fuseDate,
"fuseTime": fuseTime,//"format like above",
"fuseLat": fuseLat,
"fuseLong": fuseLong
};
});
	$.post('/future',loopIn,function(){
		console.log("hit .post loopIn");
	event.preventDefault();
	console.log(loopIn);
	});
});