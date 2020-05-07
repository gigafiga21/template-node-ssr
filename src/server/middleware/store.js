import configureStore from 'functions/store.js';

const storeMiddleware = () => (req, res, next) => {
    const { storeConfig } = req.page;
    req.store = storeConfig &&
        configureStore(storeConfig.reducers, storeConfig.init, storeConfig.saga);
    
    next();
};

export default storeMiddleware;
