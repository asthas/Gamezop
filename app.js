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
  setTimeout(function(){
    $("#chat").animate({ scrollTop: 700 }, 50000);
  }, 3000)

  $('.typing1').each(function(i){
    console.log(i);
    var selector = $(this);
    var time = parseFloat(selector.siblings().attr('data-wow-delay'));
    var toSeconds = (time * 1000) - 300;
    var hideTyping = setInterval(function() {
      selector.fadeOut();
    }, toSeconds);

    console.log(toSeconds);
  });
  $('.typing2').each(function(i){
    console.log(i);
    var selector = $(this);
    var time = parseFloat(selector.siblings().attr('data-wow-delay'));
    var toSeconds = (time * 1000) - 300;
    var hideTyping = setInterval(function() {
      selector.fadeOut();
    }, toSeconds);

    console.log(toSeconds);
  });
  $('.typing3').each(function(i){
    console.log(i);
    var selector = $(this);
    var time = parseFloat(selector.siblings().attr('data-wow-delay'));
    var toSeconds = (time * 1000) - 300;
    var hideTyping = setInterval(function() {
      selector.fadeOut();
    }, toSeconds);

    console.log(toSeconds);
  });
  $('.typing4').each(function(i){
    console.log(i);
    var selector = $(this);
    var time = parseFloat(selector.siblings().attr('data-wow-delay'));
    var toSeconds = (time * 1000) - 300;
    var hideTyping = setInterval(function() {
      selector.fadeOut();
    }, toSeconds);

    console.log(toSeconds);
  });
  $('.typing5').each(function(i){
    console.log(i);
    var selector = $(this);
    var time = parseFloat(selector.siblings().attr('data-wow-delay'));
    var toSeconds = (time * 1000) - 300;
    var hideTyping = setInterval(function() {
      selector.fadeOut();
    }, toSeconds);

    console.log(toSeconds);
  });
  $('.typing6').each(function(i){
    console.log(i);
    var selector = $(this);
    var time = parseFloat(selector.siblings().attr('data-wow-delay'));
    var toSeconds = (time * 1000) - 300;
    var hideTyping = setInterval(function() {
      selector.fadeOut();
    }, toSeconds);

    console.log(toSeconds);
  });
})
