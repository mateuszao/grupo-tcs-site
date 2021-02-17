$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('header').addClass('menu-bg-scroll');
    $('header').removeClass('menu-bg');
  }
  else {
    $('header').addClass('menu-bg');
    $('header').removeClass('menu-bg-scroll');
  }
})