console.log("Exercicio 01 =======================================================================");
a = 10;
b = 6;

let adicao = a + b;

console.log("O valor da adição é " + adicao);

let subtracao = a- b ;

console.log("O valor da subtração é  " + subtracao);

let multiplicacao = a * b ;
console.log("O valor da Multiplicação é " + multiplicacao);

let divisao = a / b;
console.log("O valor da divisão é " + divisao);

let modulo = a % b ;
console.log("O resto da divisão é " + modulo);

console.log("Exercicio 02 =======================================================================");

let numx =200;
let numy =150;


if(numx > numy){

console.log("O maior numero é o da variavel 'numx' " + numx)
}
else{

console.log("O maior numero é o da variavel 'numy' " + numy)
}

console.log("Exercicio 03 =======================================================================");

let numx1 =2000;
let numy1 =1500;
let numz1 =22511;


if(numx1 > numy1 && numx1 > numz1){

console.log("O maior numero é o da variavel 'numx' " + numx1)
} 
else if(numy1 > numx1 && numy1 > numz1){

    console.log("O maior numero é o da variavel 'numy' " + numy1)


}else if(numz1 > numx1 && numz1 > numx1) {
    console.log("O maior numero é o da variavel 'numz' " + numz1)



}else if(numz1 > numy1){
    console.log("O maior numero é o da variavel 'numy' " + numz1)


}


console.log("Exercicio 04 =======================================================================");

let numberType = null;
let number = 0 ;

if(number > 0 ) {
console.log("Positive");
} else if(number < 0) {
console.log("Negative");
} else{
console.log("Zero")

}

console.log("Exercicio 05 =======================================================================");

let tangulo1 = 30;
let tangulo02 = 100;
let tangulo03 = 50;

if(tangulo1 + tangulo02 + tangulo03 == 180)
{
    console.log("triangulo valido !");
}else{

    console.log("triangulo inválido !");
}