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

const mainMenu = document.querySelector('.menu-nav ul');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}