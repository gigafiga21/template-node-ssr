import { createStore } from 'redux';
import configureStore from 'functions/store.js';

import { storeConfig as memes } from 'pages/memes/store.js';
import { storeConfig as doggos } from 'pages/doggos/store.js';
const storeConfigs = { memes, doggos };

const storeMiddleware = () => (req, res, next) => {
    const storeConfig = storeConfigs[req.page.name];
    req.store = configureStore(storeConfig.reducers, storeConfig.init, storeConfig.sagas);
    next();
};

export default storeMiddleware;
