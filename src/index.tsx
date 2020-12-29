import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app';

import reducer from './reducer';

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    // eslint-disable-next-line no-underscore-dangle
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
