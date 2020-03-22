const cartaverso = document.getElementById('cartaverso');
const pilhacartas = ['nove-de-espadas.png','cinco-de-ouros.png', 'seis-de-copas.png', 'quatro-de-paus.png', 'sete-de-espadas.png',
'tres-de-ouros.png', 'sete-de-paus.png'] ;

cartaverso.addEventListener('click', function () {
 const gridcartas = document.querySelectorAll('.gridcartas');
 if (gridcartas[0].childElementCount < 7){
  imgcarta = document.createElement('img')
  imgcarta.setAttribute('class','cartas');
  imgcarta.setAttribute('src', pilhacartas[Math.floor(Math.random() * 7)]);
   gridcartas[0].appendChild(imgcarta); 
   console.log(Math.floor(Math.random() * 7));    
 
 } else {
   alert("Numero máximo de cartas excedido ! favor excluir uma carta para poder inserir novas !") ;
 }
});