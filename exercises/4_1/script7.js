

console.log("Exercicio 07 =======================================================================");


let porcentage = prompt("digite a porcentagem da nota" )


 if (porcentage >= 90 && porcentage < 100){
        console.log("A");

 }else if(porcentage >= "80"){
 console.log("B");}
    
    else if (porcentage >= 70){
        console.log("C");
    }
       
    else if(porcentage >= 60){
        console.log("D");
        }
else if(porcentage >= 50){
   
        console.log("E");

}
  else if (porcentage < 50){
        console.log("F") ;       
       }
       else if(porcentage < 0 && porcentage > 100){
       console.log("Escolha um valor entre 0 e 100 .")
         
       }
    else{
         console.log("Valor inválido !");
        }