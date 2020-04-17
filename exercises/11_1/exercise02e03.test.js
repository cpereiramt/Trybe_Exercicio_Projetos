
const users = {
   4 : { name: 'Mark' },
   5 : { name: 'Paul' }
    };
    
    const findUserById = (id) => {
      return new Promise((resolve, reject) => {
          if (users[id]) {
            return resolve(users[id]);
          }    
          return reject({ error: 'User with ' + id + ' not found.' });
      });
    }
    
    const getUserName = (userID) => {
      return findUserById(userID).then(user => user.name);
    }
     
   /*  describe('Teste referentes ao exericicio numero 02 e 03', () => {
      test('Testando exercicio 02 resolve', () => {
        expect.assertions(1);
        findUserById(4).then( user => {
          expect(user).toEqual({ name: 'Mark' });
        }              
        );
      });

      test('Retorne a lista de animais reject', () => {
        return findUserById(0).catch(id =>          
          expect(id).toEqual({ error: 'User with 0 not found.'})          
        );
        
      });
    }); */

    describe('Teste referentes ao exericicio numero 02 e 03', () => {
      test('Testando exercicio 02 resolve', async () => {
        expect.assertions(1);
       const user = await findUserById(4); 
          expect(user).toEqual({ name: 'Mark' });     
        
      });

      test('Retorne a lista de animais reject', async () => {
        try {
         await findUserById(0)
      } catch (error) {        
          expect(error).toEqual({ error: 'User with 0 not found.'})          
      }
        
      });
    });
    
    