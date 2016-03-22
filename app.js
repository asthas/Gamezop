function initWow() {
  new WOW().init();
}

function setUpScroll() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 1){
      $('ul, img.logo, .top').addClass("sticky");
    }
    else {
      $('ul, img.logo, .top').removeClass("sticky");
    }
  });
}

$(document).ready(function(){

  initWow();
  setUpScroll();

  $('.typing').each(function(i){
    var counter = 200 + i * 1000;

    var selector = $(this);
    var time = parseInt(selector.siblings().attr('data-wow-delay'));
    var toSeconds = (time * 1000) - 100;

    var showTyping = setInterval(function() {
      selector.fadeIn();
    }, counter);

    var hideTyping = setInterval(function() {
      clearInterval(showTyping);
      selector.fadeOut();
    }, toSeconds);

    console.log(toSeconds);
  });
})
