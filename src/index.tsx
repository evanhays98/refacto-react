// This file has to be left untouched

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import createStore from './redux/store';
import { Provider } from 'react-redux';
import { receiveDomains } from './redux/domains/actions';

const store = createStore();

store.dispatch(receiveDomains([
    'US_OK-WOK',
    'FR_NK-WOL',
    'FR_OK-NPP',
    'EN_NK-NRP',
    'EN_BL-WOL',
]))

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);