import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

export default function CounterTsIndex() {
    return(
        <Provider store={store}>
          <App />
        </Provider>
    )
}

