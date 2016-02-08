$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('ul').addClass("sticky");
  }
  else{
    $('ul').removeClass("sticky");
  }
});