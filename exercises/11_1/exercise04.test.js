const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}
    
const UR = 'https://api.github.com/users/tryber/repos';
describe('teste para o exercicio 04', () =>{
  test('Teste para saber se o Array contem o item', () => {

    return getRepos(UR).then(repo => {
     expect(repo).toContain('enterprise-bridge-panel');
     expect(repo).toContain('sd-01-block26-mongodb-aggregations');
    });
  });
});



