import { DOGGOS_GET, DOGGOS_FETCHED } from './types';
import { takeEvery, put, call } from 'redux-saga/effects'

function* doggosFetch() {
    const data = yield call(() =>
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
    );
    yield put({ type: DOGGOS_FETCHED, picture: data.message });
}

export default function* watchDoggos() {
    yield takeEvery(DOGGOS_GET, doggosFetch);
}
