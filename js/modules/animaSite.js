export default function animaSite(){
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    reset: true
  });

  // ------ Scroll HOME ------ //
  sr.reveal('.home__title', {});
  sr.reveal('.home__title', {delay: 400});
  sr.reveal('.contato-home', {delay: 200});
  sr.reveal('.contato-home-dois', {delay: 200});

  // ------ Quem somos ------ //
  sr.reveal('.quem-somos-animate', {});
  sr.reveal('.quem-somos-animate', {delay: 100});

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