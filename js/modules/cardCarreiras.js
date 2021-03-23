export default function cardCarreiras() {
  const cardVagas = document.querySelector('.card-vagas');
  const cardVagasTitulo = document.querySelector('.card-vagas-titulo');
  const cardVagasParagrafo = document.querySelector('.card-vagas-paragrafo');
  const cardVagaTituloEmpresa = document.querySelector('.card-vagas-titulo-empresa');
  const cardParagrafo = document.querySelector('.card-vagas-paragrafo > p');
  const formTamplate = document.querySelector('.form-vagas');
  const btnCandidatar = document.querySelector('.cadastro-vaga');
  const btnFechar = document.querySelector('.cadastro-vaga');

  btnCandidatar.addEventListener('click',show);
  //closeMenu.addEventListener('click',close);

  function show(event){
      event.preventDefault();

      cardVagas.style.flexDirection  = 'column';
      cardVagasTitulo.style.width = '100%';
      cardVagasTitulo.style.borderRadius = '15px 15px 0 0';

      cardVagasParagrafo.style.width = '100%';
      cardVagasParagrafo.style.borderRadius = '0 0 15px 15px';
      
      cardVagaTituloEmpresa.style.padding = '10px 0 30px 20px';
      cardParagrafo.style.display = 'none';

      formTamplate.style.display = 'block';

      
  }
  // function close(){
  //     mainMenu.style.top = '-130%';
  // }
}


// @media(max-width: 762px){
// 	.card-vagas {
// 		flex-direction: column;
// 	}

// 	.card-vagas-titulo {
// 		width: 100%;
// 		border-radius: 15px 15px 0 0;
// 	}

// 	.card-vagas-paragrafo {
// 		width: 100%;
// 		border-radius: 0 0 15px 15px;
// 	}

// 	.card-vagas-titulo-empresa {
// 		font-size: 18px;
// 		color: #FFFFFF;
// 		padding: 10px 0 30px 20px;
// 	}
// }
