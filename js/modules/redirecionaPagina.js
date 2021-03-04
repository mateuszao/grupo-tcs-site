export default function redirecionaPagina(){
  var base_url = window.location.origin;
  console.log(base_url)

  btnImpactar = document.querySelector('.card-body');
  btnValorizar = document.querySelector('.card-body-dois');
  btnInovar = document.querySelector('.card-body-tres');
  btnEmpreender = document.querySelector('.card-body-quatro');

  if(btnImpactar && btnValorizar && btnInovar && btnEmpreender){
    btnImpactar.addEventListener('click', function() {
      window.location.href = base_url + "/grupo-tcs-site/page-impactar.html";
    });
  
    btnValorizar.addEventListener('click', function() {
      window.location.href = base_url + "/grupo-tcs-site/page-valorizar.html";
    });
  
    btnInovar.addEventListener('click', function() {
      window.location.href = base_url + "/grupo-tcs-site/page-inovar.html";
    });
  
    btnEmpreender.addEventListener('click', function() {
      window.location.href = base_url + "/grupo-tcs-site/page-empreender.html";
    });
  }
}
