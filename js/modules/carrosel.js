export default function carrosel() {
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

