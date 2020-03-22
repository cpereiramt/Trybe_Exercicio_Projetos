//Exercicio 01 

 function fatorial(n) {
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
