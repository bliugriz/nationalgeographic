$(document).ready(function(){
    $("#menuIcon").click(function(){
    $("#menu").slideToggle("medium");
	});
});
$(document).ready(function(){
    $("#searchIcon").click(function(){
    $("#search").fadeToggle("fast");
	});
});
$(document).ready(function(){
    $("#pokalbisImage").click(function(){
    $("#video").fadeToggle("fast");
	$('#music_video').get(0).play()
	});
});
$(document).ready(function(){
    $("#video").click(function(){
    $("#video").fadeToggle("fast");
	$('#music_video').get(0).play()
	});
});


$(document).ready(function(){
    $("#vaizdai").click(function(){
    $("#vaizdai").css("background-image", "url(images/map.jpg)");
	});
});
$(document).ready(function(){
      $('.your-class').slick({
        setting-name: setting-value
      });
    });