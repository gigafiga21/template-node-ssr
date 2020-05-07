import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';
import configureStore from './store.js';

import App from 'components/AppMemes';
import 'pages/index.css';

ReactDOM.hydrate(
    <BrowserRouter history={createBrowserHistory()}>
        <Provider store={configureStore()}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);