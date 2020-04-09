function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
      }
    
    return a + b;
  }

  const assert = require("assert");

//exercicio 01
  assert.equal(sum(4,5),9);

  //exercicio 02 
  assert.equal(sum(0,0),0);

  //exercicio 03 
  assert.strictEqual(sum(4,"5"),'parameters must be numbers');