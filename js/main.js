$(document).ready(function(){
    $(".regular").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });      
	  $(".center").slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".variable").slick({
        infinite: true,
        variableWidth: true
      });
	$("#video").click(function(){
    $("#video").fadeToggle("fast");
	$('#music_video').get(0).pause()
	$('#music_video').get(0).currentTime = 0;
	});
	
});  

function aud_play_pause() {
  var myAudio = document.getElementById("irasas");
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
}