import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reducer from './Store/Reducer'; // make sure the path is correct
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Create the Redux store with the reducer
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
