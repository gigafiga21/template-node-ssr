import * as types from './types';

export function doggosGet() {
    return {
        type: types.DOGGOS_GET
    }
}

export function doggosFetched(picture) {
  return {
    type: types.DOGGOS_FETCHED,
    picture
  };
}
