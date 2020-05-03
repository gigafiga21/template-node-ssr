import * as types from './types';

export default function doggos(state = {}, action) {
    switch (action.type) {

        case types.DOGGOS_FETCHED:
            return { ...state, picture: action.picture }

        default:
            return state;
    }
}
