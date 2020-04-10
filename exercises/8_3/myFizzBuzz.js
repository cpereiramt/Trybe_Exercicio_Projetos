const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.equal(myFizzBuzz(15),'fizzbuzz');
assert.equal(myFizzBuzz(3),'fizz');
assert.equal(myFizzBuzz(5),'buzz');

//teste de variavel definida
const thereIs = "";
assert.notEqual(thereIs,undefined);

function thereIs2() {}

//assert.notEqual(thereIs2(),undefined);
function change(param) {
    return param;
  }

  assert.ok(change(2),2);

  const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  
  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };
  
  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };

  assert.deepEqual(obj1,obj2);


  //Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que 
  //o segundo e false caso contrário.
  //não consegui resolver a questão abaixo .
  function isAbove(num1, num2) {
    return num1 > num2;
  }


