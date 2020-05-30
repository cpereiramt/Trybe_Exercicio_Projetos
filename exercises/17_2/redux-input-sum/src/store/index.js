import { createStore, combineReducers } from 'redux';
import  inputSumReducer  from '../reducer/index'

const rootReducer = combineReducers({inputSumReducer})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;