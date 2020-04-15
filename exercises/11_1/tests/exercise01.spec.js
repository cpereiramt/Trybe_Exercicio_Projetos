const uppercase = require('./exercise01.js');


test('Exercicio 01',(done) => {
  const callback = (data) => {
    expect(data).toBe('A');
    done();
  };

  uppercase('a',callback);
});