import memesReducers from 'store/memes/reducers.js';
import memesInit from 'store/memes/init.js'

import configureStore from 'functions/store.js';

export const storeConfig = { reducers: memesReducers, init: memesInit };
export default configureStore.bind(
    null,
    storeConfig.reducers,
    storeConfig.init,
    storeConfig.sagas
);
