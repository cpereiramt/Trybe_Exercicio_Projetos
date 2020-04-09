console.log("Exercicio 06 =======================================================================");
let response = prompt("Qual a peça do xadrez ?");
switch (response.toLowerCase()) {
    case "rei":
        console.log("Movimenta em qualquer direção, uma casa por vez !");        
        break;
    case "dama":
        console.log("Movimenta em qualquer direção, quantas casa tiverem desde que todas livres !");
        break;
    case "torre":
        console.log("Move-se em linha reta, na vertical ou horizontal !");
        break;
    case "bispo":
            console.log("Move-se em na diagonal !");
            break;        
    case "cavalo":
         console.log("unica peça que pode pular outras, move-se em 'L'");
         break;
    default:
        console.log("Peça não encontrada!");
        break;
}