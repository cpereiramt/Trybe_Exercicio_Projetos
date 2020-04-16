const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  }     

  test('Exercicio 01',(done) => {
    const callback = (data) => {
      expect(data).toBe('A');
      done();
    };
  
    uppercase('a',callback);
  });

module.exports = uppercase;