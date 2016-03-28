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

function autoScroll() {
  $('#chat').animate({scrollTop: 1800}, 45500);
}

$(document).ready(function(){

  initWow();
  setUpScroll();

  //Comment out next line to disable auto scroll
  /*setTimeout(autoScroll, 2000)

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
  });*/
  var msg = "ooolalala";

  var pbox = $('.chat-left');

  $('.chat-left').text(" Old chat messages");

  var chat_div = $('<div></div>').attr('class', 'chat_msg').text(msg);

  chat_div.appendTo(pbox);

  var height = pbox.scrollTop() + pbox.height() + $('#postbox').filter('.chat_msg:last').scrollTop();

  pbox.animate({'scrollTop' : height}, 1000);
})
