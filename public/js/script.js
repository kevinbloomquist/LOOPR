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
// start render JSON loops here (convert to LOOPR)
$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('http://localhost:3000/',function(res,req){

var loopsList = res;
console.log(loopsList);

// for (i=0;i<sampleAlbums.length;i++){
  res.forEach(function(loop) {
    renderLoop(loop);


  });
});

//a way to see a new loop when created ()
// $('.createPAge form').submit(function(event){
//   event.preventDefault();
//   var newLoop = $(this).serialize();
//   // working here soo close (inspect!!!)
//   $.post('/',newLoop, function(res){
//     console.log(res);
  

//     renderLoop(res);
//     console.log(albumIn);
//   });

// });




});
function renderLoop(loop) {

  console.log('rendering loop:', loop);


  var loopHtml =
  "        <!-- one album -->" +
  "        <div class='row album' data-album-id='" + loop._id + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "            <div class='panel panel-default'>" +
  "              <div class='panel-body'>" +
  "              <!-- begin album internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 thumbnail album-art'>" +
  "                     <img src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Album Name:</h4>" +
  "                        <span class='album-name'>" + loop.date + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Artist Name:</h4>" +
  "                        <span class='artist-name'>" +  loop.message+ "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Released date:</h4>" +
  "                        <span class='album-releaseDate'>" + album.releaseDate + "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of album internal row -->" +

  "              </div>" + // end of panel-body

  "              <div class='panel-footer'>" +
  "              </div>" +

  "            </div>" +
  "          </div>" +
  "          <!-- end one album -->";

  // render to the page with jQuery
$('.loops').append(loopHtml);
}




