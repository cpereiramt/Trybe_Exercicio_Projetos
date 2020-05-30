import { createStore, combineReducers } from 'redux';
import counterReducer from '../reducer/index';

const rootReducer = combineReducers({counterReducer});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 


export default store; 

