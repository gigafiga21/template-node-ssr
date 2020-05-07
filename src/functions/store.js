import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import canUseDOM from 'functions/canUseDOM.js';

export default function configureStore(reducers, init, sagas) {
    if (canUseDOM()) {
        init = window.__STORE__ ? window.__STORE__ : init;
        delete window.__STORE__;
    }

    let sagasMiddleware, middleware = [];
    process.env.NODE_ENV === 'development' && middleware.push(createLogger());
    sagas && (sagasMiddleware = middleware[middleware.length] = createSagaMiddleware());
    middleware = applyMiddleware(...middleware);

    const store = createStore(reducers, init, middleware);
    sagas && sagas.forEach(saga => sagasMiddleware.run(saga));

    return store;
}
