import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Botao from './Botao';
import Contador from './Contador';


function App() {
  return (
     <div className="App">
     <Provider store={store} >      
       <Contador />
       <Botao />
     </Provider>
     </div>
  );
}

export default App;
