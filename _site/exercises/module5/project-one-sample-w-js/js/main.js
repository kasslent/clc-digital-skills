$(document).ready(function() {

	//Mobile Navigation
	$(".close, .hamburger").click(function(e){
	  e.preventDefault();
	  $(".main-nav").toggleClass('open-nav');
	});

});
