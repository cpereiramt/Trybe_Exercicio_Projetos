

//=============================================================
//exercicio 1
inputEmail = document.getElementById('email');
inputEmail.addEventListener('keyup', function(event){
  if(event.keyCode === 13){
      let email = event.target.value;     
      validatarEmail(email);
  }
  });

function validatarEmail(email) 
{ 
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
 if (email.match(regex))
  {
    console.log('Email validado com sucesso !');
      }else{
    console.log('Formato de email incorreto');
}}

let estados =['AC','AL','AP','AM','BA',
'CE','DF','ES','GO','MA','MT','MS','MG',
'PA','PB','PR','PE','PI','RJ','RN','RS',
'RO','RR','SC','SP','SE','TO'];

comboEstados = document.getElementById('estados');
function preencheEstados() {
    

for(var i in estados ){
 comboEstados.appendChild(document.createElement('option')).innerHTML = estados[i];
}}
window.onload = preencheEstados();

//================================================================
//Exercicio 02


//Exercicio 03 
window.onsubmit = function (event) {
    event.preventDefault();
    console.log('não carregou!');
    let form = document.getElementsByTagName('form');
    console.log(form[0]);
    form[0].appendChild(document.createElement('div')).innerHTML = inputEmail.value;
    
}
