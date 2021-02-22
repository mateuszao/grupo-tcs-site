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
  
  // carrousel.classList.add('w-100');
  // jsFormId.classList.remove('w-50');
  // h1Sessao02.remove();
  // jsSessao02.classList.add('mt-js-mobile');
  
  // var h1Sessao02Img = document.createElement('h1');
  // h1Sessao02Img.innerHTML = 'Quem é Gabriel Mota?';
  // h1Sessao02Img.classList.add('h4');
  // h1Sessao02Img.classList.add('titulo-texto-sobre');
  // h1Sessao02Img.classList.add('texto-sobre-js');
  // h1Sessao02Img.classList.add('mt-5');

  // jsSessao02Img.appendChild(h1Sessao02Img);
  
  
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
  
  



  
  //ImagensCarrosel.remove();
  
}