import React from 'react';
import './App.css';
import {Provider } from 'react-redux';
import store from './store';
import ImputsSUM from './InputsSUM';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ImputsSUM />
      </Provider> 
    </div>
  );
}

export default App;
