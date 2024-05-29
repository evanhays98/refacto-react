// This file has to be left untouched

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import createStore from './redux/store'
import { receiveDomains } from './redux/domains/actions';

const store = createStore();

store.dispatch(receiveDomains([
    'US_OK-WOK',
    'FR_NK-WOL',
    'FR_OK-NPP',
    'EN_NK-NRP',
    'EN_BL-WOL',
]))

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);