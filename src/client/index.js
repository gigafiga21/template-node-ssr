import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import storeConfig from '../store';

import App from '../components/App';
import './index.css';

const preloadedState = window.__STORE__;
delete window.__STORE__;

const sagaMiddleware = createSagaMiddleware();
const debugMiddleware = createLogger();
const store = createStore(storeConfig.reducers, preloadedState, applyMiddleware(sagaMiddleware, debugMiddleware));
storeConfig.sagas.forEach(saga => sagaMiddleware.run(saga));

ReactDOM.hydrate(
    <BrowserRouter history={createBrowserHistory()}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
