export default function initModal() {
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

