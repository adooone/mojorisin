import {
    call,
    put,
    //
} from 'redux-saga/effects';
import * as ActionTypes from '../../consts/actionTypes';
import neptune from '../../neptune_api/index';
import { SHOW_SNACKBAR } from '../actions/actions';

const sagas = {
    * [ActionTypes.TEST_FETCH](action) {
        const resp = yield call(neptune.login, 'denis', '1234');
        console.log(resp);
        yield put(SHOW_SNACKBAR(resp));
        yield console.log(action.name);
    },
};

export default sagas;
