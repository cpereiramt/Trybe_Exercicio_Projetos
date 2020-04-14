const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  }
      
test('Exercicio 01' , () => {
  expect(uppercase('a').tobe('A'));
});  