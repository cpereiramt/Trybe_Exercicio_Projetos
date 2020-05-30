const INITIAL_STATE = {
  count : 0
};

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      console.log('acessou aqui !')
      return {count:  state.count + 1}
      case 'DECREASE_COUNT':
        console.log('acessou aqui !')
        return {count:  state.count - 1}
    default:
      return INITIAL_STATE;
  }
}

export default counterReducer;

/* 
Primeiro, definimos um estado inicial para nosso reducer;

Um reducer deve receber como parâmetro um estado e uma ação;

A ação, por convenção, deve ser um objeto e possuir a key type. 
É essa key que define como o reducer vai manipular o estado.

No exemplo, como estamos criando uma contador e só queremos adicionar elementos,
 caso o type seja igual a “COUNTER_ELEMENT', estamos instruindo nosso reducer a guardar todo o estado anterior, 
 utilizando spread operator, e a adicionar o novo elemento, que nesse caso está na key value da nossa action.
  Caso o type seja diferente de “COUNTER_ELEMENT”, o reducer deverá cair no default do switch, que preserva o state. */