import React from 'react';
// import ReactDOM from 'react-dom';
import { render, hydrate } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from 'store';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
} else {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
}

registerServiceWorker();
