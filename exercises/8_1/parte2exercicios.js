//Exercicio 01 
//arrow functions 
 const fatorial = (n) => {
    if (n == 0) {
        return 1;
    }
    var resp = n;
    while (n > 2) {
        resp *= --n;
    }
    return resp;
}
 
console.log(fatorial(4));

//Exercicio 02

const maiorPalavra = (text) =>
{  
 let palavras = '';
palavras = text.split(' ');
let palavra_tamanho = palavras[0].length;
let maiorpalavra = palavras[0];
for(i = 0; i < palavras.length; i++) 
{
    if (palavra_tamanho < palavras[i].length){
        palavra_tamanho = palavras[i].length;
        maiorpalavra = palavras[i];
    }
}
return maiorpalavra;
}
console.log(maiorPalavra('inserçãodsfd de texto parafgsdddffff teste !'));

//exercicio 3
const botaovisitas = document.querySelector('#visitas') ;
let clickCount = 0 ;
botaovisitas.addEventListener('click', function () {
    clickCount += 1;
  console.log(`visitas computadas ${clickCount}`)
  const result =  document.getElementById('resultado');
 
  result.innerHTML = document.createElement('p').innerText = `visitas computadas ${clickCount}`;
});
 
