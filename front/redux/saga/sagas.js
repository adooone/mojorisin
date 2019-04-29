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
    GET_ALBUM,
    OPEN_ALBUM,
} from '../actions/actions';
import photosDescription from '../../description/photos';

const sagas = {
    * [ActionTypes.TEST_FETCH]() {
        yield put(SHOW_LOADER());
        yield delay(2000);
        let resp = null;
        try {
            resp = yield call(neptune.login, 'denis', '1234');
        } catch (err) {
            yield put(SHOW_SNACKBAR('error'));
            yield put(CLOSE_LOADER());
        }
        yield put(SHOW_SNACKBAR(resp));
        yield put(CLOSE_LOADER());
    },
    * [ActionTypes.GET_PHOTOS_PREVIEW](action) {
        // yield put(SHOW_LOADER());
        // yield delay(2000);
        const resp = yield call(neptune.getPhotosPreview, action.album);
        yield put(SET_PHOTO_DATA(resp.data.photos));
        yield put(SHOW_SNACKBAR(resp));
        // yield put(CLOSE_LOADER());
    },
    * [ActionTypes.GET_ALBUM](action) {
        // yield put(SHOW_LOADER());
        // yield delay(2000);
        let resp = null;
        try {
            resp = yield call(neptune.getPhotos, action.album);
            const album = _.find(photosDescription.albums, (o) => {
                return o.name === action.album;
            });
            yield put(OPEN_ALBUM(album));
            yield put(SET_PHOTO_DATA(resp.data.photos));
            // yield put(SHOW_SNACKBAR(resp));
        } catch (error) {
            yield put(SHOW_SNACKBAR(error.toString()));
        }
        // yield put(CLOSE_LOADER());
    },
    * [ActionTypes.UPLOAD_FILE](action) {
        yield put(SHOW_LOADER());
        // yield delay(2000);
        try {
            const resp = yield call(neptune.uploadPhoto, action.data);
            yield put(SHOW_SNACKBAR(resp));
        } catch (error) {
            yield put(SHOW_SNACKBAR(error.toString()));
        }
        yield put(CLOSE_LOADER());
    },
    * [ActionTypes.DELETE_FILE](action) {
        yield put(SHOW_LOADER());
        // yield delay(2000);
        const resp = yield call(neptune.deletePhoto, action.data);
        yield put(GET_ALBUM(action.data.album));
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
