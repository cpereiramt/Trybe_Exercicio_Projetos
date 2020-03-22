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

