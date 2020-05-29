import { createStore, combineReducers } from 'redux';
import counterReducer from '../reducer';

const rootReducer = combineReducers(counterReducer);
const store = createStore(rootReducer);

export default store;

//A função createStore deve receber
// como parâmetro um reducer. Portanto, 
//vamos criar um no arquivo src/reducer/index.js: