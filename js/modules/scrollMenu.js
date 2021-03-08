export default function scrollMenu(){
  $(window).on('scroll', function(){
    if($(window).scrollTop()){
      $('header').addClass('menu-bg-scroll');
      $('header').addClass('sombra-menu');
      $('header').removeClass('menu-bg');
    }
    else {
      $('header').addClass('menu-bg');
      $('header').removeClass('sombra-menu');
      $('header').removeClass('menu-bg-scroll');
    }
  })

  if($(window).scrollTop() != 0){
    $('header').addClass('menu-bg-scroll');
    $('header').addClass('sombra-menu');
  }
}


