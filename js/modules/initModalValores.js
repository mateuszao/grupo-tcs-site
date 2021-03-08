export default function initModalValores() {
  const botaoAbrir = document.querySelectorAll('[data-modal="abrir-valores"]');
  const containerModal = document.querySelector('[data-modal="container-valores"]');
  
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

