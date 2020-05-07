import doggoReducers from 'store/doggos/reducers.js';
import doggoSagas from 'store/doggos/sagas.js';
import doggoInit from 'store/doggos/init.js'

import configureStore from 'functions/store.js';

export const storeConfig = { reducers: doggoReducers, init: doggoInit, sagas: [doggoSagas] };
export default configureStore.bind(
    null,
    storeConfig.reducers,
    storeConfig.init,
    storeConfig.sagas
);
