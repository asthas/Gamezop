$(window).scroll(function() {
	if($(this).scrollTop() > 1){
		$('ul').addClass("sticky");
		$('img.logo').addClass("sticky");
	}
	else {
		$('ul').removeClass("sticky");
		$('img.logo').removeClass("sticky");
	}
});