import {
    call,
    put,
    delay,
    //
} from 'redux-saga/effects';
import * as ActionTypes from '../../consts/actionTypes';
import neptune from '../../neptune_api/index';
import {
    SHOW_SNACKBAR,
    SHOW_LOADER,
    CLOSE_LOADER,
    LOGIN_ADMIN,
    SET_PHOTO_DATA,
    GET_PHOTOS,
} from '../actions/actions';

const sagas = {
    * [ActionTypes.TEST_FETCH](action) {
        yield put(SHOW_LOADER());
        yield delay(2000);
        const resp = yield call(neptune.login, 'denis', '1234');
        console.log(resp);
        yield put(SHOW_SNACKBAR(resp));
        yield console.log(action.name);
        yield put(CLOSE_LOADER());
    },
    * [ActionTypes.GET_PHOTOS](action) {
        // yield put(SHOW_LOADER());
        // yield delay(2000);
        const resp = yield call(neptune.getPhotos, action.album);
        yield put(SET_PHOTO_DATA(resp.data.photos));
        yield put(SHOW_SNACKBAR(resp));
        // yield put(CLOSE_LOADER());
    },
    * [ActionTypes.UPLOAD_FILE](action) {
        yield put(SHOW_LOADER());
        // yield delay(2000);
        const resp = yield call(neptune.uploadPhoto, action.data);
        yield put(SHOW_SNACKBAR(resp));
        yield put(CLOSE_LOADER());
    },
    * [ActionTypes.DELETE_FILE](action) {
        yield put(SHOW_LOADER());
        // yield delay(2000);
        const resp = yield call(neptune.deletePhoto, action.data);
        yield put(GET_PHOTOS(action.data.album));
        yield put(SHOW_SNACKBAR(resp));
        yield put(CLOSE_LOADER());
    },
    * [ActionTypes.NEPTUNE_LOGIN](action) {
        yield put(SHOW_LOADER());
        // yield delay(2000);
        const resp = yield call(neptune.login, action.name, action.password);
        if (resp.data.admin) {
            yield put(LOGIN_ADMIN());
        }
        yield put(SHOW_SNACKBAR(resp));
        yield put(CLOSE_LOADER());
    },
};

export default sagas;
