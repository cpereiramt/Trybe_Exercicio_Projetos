const INITIAL_STATE = {
 input_one:0,
 input_two:0,
 input_three:0,
 input_sum:0,
}

function inputSumReducer(state=INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
      case 'INPUT_VALUE_SUM1':
        console.log(state.input_sum)
          return {
            input_one: action.value          
           
          }
          case 'INPUT_VALUE_SUM2':
            return {
              input_two: action.value
            }    
            case 'INPUT_VALUE_SUM3':
              return {
                input_three: action.value
              }
      default:
          return state;
  }
}
export default inputSumReducer;