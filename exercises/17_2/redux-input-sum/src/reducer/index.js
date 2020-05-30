const INITIAL_STATE = {
 input_one:0,
 input_two:0,
 input_three:0,
 input_sum:0,
}

function inputSumReducer(state=INITIAL_STATE, action) {
  
  switch (action.type) {
      case 'INPUT_VALUE_SUM1':
          return  {...state,
            input_one: action.value
          }
          case 'INPUT_VALUE_SUM2':
            return {...state,
              input_two: action.value
            }   
            case 'INPUT_VALUE_SUM3':
              return  {...state,
                input_three: action.value
              }
              case 'SUM_ALL':
              return  {...state,
                input_sum: state.input_one + state.input_two + state.input_three
              }
      default:
          return state;
  }
}
export default inputSumReducer;