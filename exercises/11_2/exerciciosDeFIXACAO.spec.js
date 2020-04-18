const randomNumber = () => Math.floor(Math.random() * 100) // Lógica de gerar o número

const isDivisible = (number) => (randomNumber() % number) === 0


 
 let randomNumber2 = jest.fn(randomNumber);
 randomNumber2.mockReturnValue(2);
let isDivisible2 = jest.fn()
.mockImplementation((number) => (randomNumber2() % number) === 0);


test('testando se isDivisible executa randomNumber2() pelo menos uma vez', () => {
    isDivisible2(3);
    expect(randomNumber2).toHaveBeenCalled();;    
  })

test('testando o retorno true na função isDivisible', () => {
  expect(isDivisible2(randomNumber2())).toBe(true);    
})