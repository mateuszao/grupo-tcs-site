// ------ Mudando cor Menu  ------ //

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


// ------ Menu Mobile  ------ //
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

}
function close(){
    mainMenu.style.top = '-130%';
}


// ------ Carrosel ------ //
$('.owl-carousel').owlCarousel({
  items:1,
  margin:10,
  autoHeight:true

});

if (window.matchMedia('(max-width: 787px)').matches) {
  var ImagensCarrosel = document.querySelectorAll('.item img');
  var divCarrosel = document.querySelectorAll('.item');
  ImagensCarrosel.forEach(removeImagens)
  
  function removeImagens(item) {
    //console.log(item);
    item.remove();
  }

  divCarrosel.forEach(adicionaImagem)

  function adicionaImagem(item){

    console.log(item);

    var imagem = document.createElement('img');
    imagem.src = "img/timeline-01-mobile.png";
    item.appendChild(imagem);
  }
}


// ------ Animação ------ //

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

// ------ Scroll HOME ------ //
sr.reveal('.home__title', {})
sr.reveal('.home__title', {delay: 400})
sr.reveal('.contato-home', {delay: 200})
sr.reveal('.contato-home-dois', {delay: 200})

// ------ Scroll Cards ------ //
sr.reveal('.card-body h1', {})
sr.reveal('.card-body h1', {delay: 100})
sr.reveal('.card-body-dois h1', {delay: 100})
sr.reveal('.card-body-tres h1', {delay: 100})
sr.reveal('.card-body-quatro h1', {delay: 100})

// ------ Quem somos ------ //
sr.reveal('.quem-somos-text', {})
sr.reveal('.quem-somos-text', {delay: 100})

// ------ O que valorizamos ------ //
sr.reveal('.oque-valorisamos-container h1', {})
sr.reveal('.oque-valorisamos-container h1', {delay: 100})
sr.reveal('.oque-valorisamos-container p', {delay: 100})

// ------ Empresas ------ //
sr.reveal('.empresas-topo', {})
sr.reveal('.empresas-topo', {delay: 100})
sr.reveal('.row-empresas', {delay: 200})

// ------ Empresas ------ //
sr.reveal('.timeline-container', {})
sr.reveal('.timeline-container', {delay: 100})

// ------ Empresas ------ //
sr.reveal('.duvidas-container', {})
sr.reveal('..duvidas-container', {delay: 100})

// ------ Empresas ------ //
sr.reveal('footer', {})
sr.reveal('footer', {delay: 100})


