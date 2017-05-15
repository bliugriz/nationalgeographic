$(document).ready(function(){  
    $("#menuIcon").click(function(){
    $("#menu").slideToggle("medium");
	});

    $("#searchIcon").click(function(){
    $("#search").fadeToggle("fast");
	});
	
    $("#pokalbisImage").click(function(){
    $("#video").fadeToggle("fast");
	$('#music_video').get(0).play()
	});
}); 