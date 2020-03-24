const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}
//exercicio 01 e 02 
assert.equal(myIndexOf([1, 2, 3, 4],5),5);
// implemente seus testes aqui


