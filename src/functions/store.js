import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import canUseDOM from 'functions/canUseDOM.js';

export function safeSaga(saga) {
    return function* (args) {
        try {
            yield saga(args);
        } catch (err) {
            console.log(err);
        }
    }
}

export default function configureStore(reducers, init, sagas) {
    let sagasMiddleware, middleware = [];

    if (canUseDOM()) {
        init = window.__STORE__ ? window.__STORE__ : init;
        delete window.__STORE__;
        process.env.NODE_ENV === 'development' && middleware.push(createLogger());
    }

    sagas && (sagasMiddleware = middleware[middleware.length] = createSagaMiddleware());
    middleware = applyMiddleware(...middleware);

    const store = createStore(reducers, init, middleware);
    if (sagas) {
        store.runSagas = sagasMiddleware.run;
        const rootTask = store.runSagas(sagas);

        if (!rootTask.done && rootTask.toPromise) {
            rootTask.done = rootTask.toPromise();
        }

        store.rootTask = rootTask;
    }

    return store;
}
