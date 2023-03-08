import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import { socket, SocketContext } from './context/socketContext';

ReactDOM.render(
  <SocketContext.Provider value={`${socket}`}>
    <Provider store={store}>
      <App />
    </Provider>
  </SocketContext.Provider>,
  document.getElementById('root'),
);
