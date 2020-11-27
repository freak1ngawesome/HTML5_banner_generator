import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.js';
import {Provider} from 'react-redux';
import store from './store.js'
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

