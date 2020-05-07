import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store.js';

import App from 'components/AppDoggos';
import 'pages/index.css';

ReactDOM.hydrate(
    <BrowserRouter>
        <Provider store={configureStore()}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);