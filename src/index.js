import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { store, persistor } from './store'
import configureStore from './store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
const { persistor, store } = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);