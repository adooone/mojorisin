import {
    all,
    takeEvery,
    //
} from 'redux-saga/effects';

import sagas from './sagas';

export default function* rootSaga() {
    yield all(
        _.map(sagas, (saga, key) => {
            return takeEvery((action) => { return key === action.type; }, saga);
        })
    );
}
