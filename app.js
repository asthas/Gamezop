$(window).scroll(function() {
	if($(this).scrollTop() > 1){
		$('ul, img.logo, .top').addClass("sticky");
	}
	else {
		$('ul, img.logo, .top').removeClass("sticky");
	}
});