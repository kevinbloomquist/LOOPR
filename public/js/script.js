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
});
// 	$.post('/',loopIn,function(){
// 		console.log("hit .post loopIn");
// 	event.preventDefault();
// 	console.log(loopIn);
// 	});
// });
// start render JSON loops here (convert to LOOPR)
$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('http://localhost:3000/',function(res,req){

var loopsList = res;

// for (i=0;i<sampleAlbums.length;i++){
  // res.forEach(function(loop) {
    // renderLoop(loop);


  });
});

//a way to see a new loop when created ()
$('.loops form').submit(function(event){
  event.preventDefault();
  var newLoop = $(this).serialize();
  // working here soo close (inspect!!!)
  $.post('/',newLoop, function(res){
    console.log(res);
  	renderLoop(res);
    console.log(newLoop);
  });

});

function deleteFunction(id){
  console.log(id);
$.ajax({
    url: '/future/'+ id,
    type: 'DELETE',
    success: function(result) {
        console.log(result);
    }
});

}



function renderLoop(loop) {

  console.log('rendering loop:', loop);


  var loopHtml =
  "        <!-- one loop -->" +
  "        <div class='row loop' data-loop-id='" + loop._id + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "            <div class='panel panel-default'>" +
  "              <div class='panel-body'>" +
  "              <!-- begin loop internal row -->" +
                  "<div class = 'delete-'"+ loop.id+ "'>X</div>" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 thumbnail loop-art'>" +
  "                     <img src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Loop Date:</h4>" +
  "                        <span class='album-name'>" + loop.date + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Loop message:</h4>" +
  "                        <span class='artist-name'>" +  loop.message+ "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Released date:</h4>" +
  "                        <span class='album-releaseDate'>" + + "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of loop internal row -->" +

  "              </div>" + // end of panel-body

  "              <div class='panel-footer'>" +
  "              </div>" +

  "            </div>" +
  "          </div>" +
  "          <!-- end one loop -->";

  // render to the page with jQuery
$('.loops').append(loopHtml);
}





