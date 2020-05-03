import { combineReducers } from 'redux';
import memes from './memes';
import doggos from './doggos';

export default {
    reducers: combineReducers({ memes: memes.reducers, doggos: doggos.reducers }),
    init: { ...memes.init, ...doggos.init },
    sagas: [doggos.sagas]
};
