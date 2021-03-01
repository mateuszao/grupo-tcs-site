// ------ Mudando cor Menu  ------ //
function scrollMenu(){
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
}

scrollMenu();


// ------ Menu Mobile  ------ //
function menuMobile() {
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
}

menuMobile();


// ------ Carrosel ------ //
function carrosel() {
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
      item.remove();
    }

    divCarrosel.forEach(adicionaImagem)

    function adicionaImagem(item){

      var imagem = document.createElement('img');
      imagem.src = "img/timeline-01-mobile.png";
      item.appendChild(imagem);
    }
  }
}

carrosel();

// ------ Animação ------ //
function animaSite(){
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  });

  // ------ Scroll HOME ------ //
  sr.reveal('.home__title', {});
  sr.reveal('.home__title', {delay: 400});
  sr.reveal('.contato-home', {delay: 200});
  sr.reveal('.contato-home-dois', {delay: 200});

  // ------ Scroll Cards ------ //
  // sr.reveal('.card-body h1', {});
  // sr.reveal('.card-body h1', {delay: 100});
  // sr.reveal('.card-body-dois h1', {delay: 100});
  // sr.reveal('.card-body-tres h1', {delay: 100});
  // sr.reveal('.card-body-quatro h1', {delay: 100});

  // ------ Quem somos ------ //
  sr.reveal('.quem-somos-text', {});
  sr.reveal('.quem-somos-text', {delay: 100});

  // ------ O que valorizamos ------ //
  sr.reveal('.oque-valorisamos-container h1', {})
  sr.reveal('.oque-valorisamos-container h1', {delay: 100});
  sr.reveal('.oque-valorisamos-container p', {delay: 100});

  // ------ Empresas ------ //
  sr.reveal('.empresas-topo', {})
  sr.reveal('.empresas-topo', {delay: 100});
  sr.reveal('.row-empresas', {delay: 200});

  // ------ Timeline ------ //
  sr.reveal('.timeline-container h1', {});
  sr.reveal('.timeline-container', {delay: 100});

  // ------ Empresas ------ //
  // sr.reveal('.duvidas-container-body h1', {});
  // sr.reveal('.duvidas-container-body h1', {delay: 100});
  // sr.reveal('.duvidas-container-body div', {delay: 100});

  // // ------ Empresas ------ //
  // sr.reveal('footer div', {});
  // sr.reveal('footer div', {delay: 100});
}

animaSite();


function scrollInterno(){
  const linksInternos = document.querySelectorAll('.mainMenu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop - 110;

    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

scrollInterno();


function initModal() {
  const botaoAbrir = document.querySelectorAll('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  
  console.log(botaoAbrir);
  if(botaoAbrir && containerModal) {
    
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }
    function cliqueForaModal(event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }
    
    botaoAbrir.forEach(abrirBtn);

    function abrirBtn(btn){
      btn.addEventListener('click', toggleModal);
    }
    
    containerModal.addEventListener('click', cliqueForaModal);
  }
}

initModal();


function redirecionaPagina(){
  
  btnImpactar = document.querySelector('.card-body');
  btnValorizar = document.querySelector('.card-body-dois');
  btnInovar = document.querySelector('.card-body-tres');
  btnEmpreender = document.querySelector('.card-body-quatro');

  if(btnImpactar && btnValorizar && btnInovar && btnEmpreender){
    btnImpactar.addEventListener('click', function() {
      window.location.href = "file:///E:/Projetos/grupo-tcs-site/page-impactar.html";
    });
  
    btnValorizar.addEventListener('click', function() {
      window.location.href = "file:///E:/Projetos/grupo-tcs-site/page-valorizar.html";
    });
  
    btnInovar.addEventListener('click', function() {
      window.location.href = "file:///E:/Projetos/grupo-tcs-site/page-inovar.html";
    });
  
    btnEmpreender.addEventListener('click', function() {
      window.location.href = "file:///E:/Projetos/grupo-tcs-site/page-empreender.html";
    });
  }
}

redirecionaPagina();