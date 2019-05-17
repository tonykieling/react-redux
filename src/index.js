import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Create redux store
const store = configureStore();

console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
