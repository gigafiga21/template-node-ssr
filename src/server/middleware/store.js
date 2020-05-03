import { createStore } from 'redux';
import storeConfig from '../../store';

const storeMiddleware = () => (req, res, next) => {
    req.store = createStore(storeConfig.reducers, storeConfig.init);
    next();
};

export default storeMiddleware;
