import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Immutable from 'seamless-immutable';
import * as ActionTypes from '../../consts/actionTypes';
import { getDict } from '../../dictionary';
import {
    PHOTOS_MODE_SELECTOR,
    LANG_EN,
    PHOTOS_MODE_ALBUM,
    PHOTOS_MODE_PHOTO,
} from '../../consts/generalConsts';
// import Modules from '../../description/modules';
// import photos from '../../description/photos';

const initialState = Immutable({
    photosMode: PHOTOS_MODE_SELECTOR,
    isMenuOpened: false,
    selectedModule: {},
    selectedAlbum: {},
    loading: true,
    admin: false,
    complexBackground: false,
    imageBackgroundSrc: 'https://cn.opendesktop.org/img/f/c/2/7/026c18b8da5fd20734e179b3a01a83bf3962.jpg',
    // SnackbarMessage: { status: 200, text: 'Success' },
    SnackbarMessage: {},
    SnackbarVisible: false,
    openedPhoto: '',
    photoData: [],
    previewData: [],
    userParams: {
        lang: LANG_EN,
        //
    },
    mobileVersion: false,
    dict: getDict(LANG_EN),
});

const viewReducer = createReducer(initialState, {
    [ActionTypes.RESET_APP]() {
        return initialState.merge({
            loading: false,
            //
        });
    },
    [ActionTypes.OPEN](state, action) {
        return state.merge({
            loading: false,
            mobileVersion: action.params.isMobile,
        });
    },
    [ActionTypes.OPEN_MENU](state) {
        return state.set('isMenuOpened', true);
    },
    [ActionTypes.CLOSE_MENU](state) {
        return state.set('isMenuOpened', false);
    },
    [ActionTypes.OPEN_MODULE](state, action) {
        return state.set('selectedModule', action.module);
    },
    [ActionTypes.OPEN_ALBUM](state, action) {
        return state.merge({
            selectedAlbum: action.album,
            photosMode: PHOTOS_MODE_ALBUM,
        });
    },
    [ActionTypes.CLOSE_ALBUMS](state) {
        return state.merge({
            selectedAlbum: {},
            photosMode: PHOTOS_MODE_SELECTOR,
        });
    },
    [ActionTypes.OPEN_PHOTO](state, action) {
        return state.merge({
            openedPhoto: action.obj,
            photosMode: PHOTOS_MODE_PHOTO,
        });
    },
    [ActionTypes.CLOSE_PHOTO](state) {
        return state.merge({
            openedPhoto: null,
            photosMode: PHOTOS_MODE_ALBUM,
        });
    },
    [ActionTypes.SET_PHOTO_DATA](state, action) {
        return state.set('photoData', action.photoData);
    },
    [ActionTypes.SET_PREVIEW_DATA](state, action) {
        return state.set('previewData', action.previewData);
    },
    [ActionTypes.LOGIN_ADMIN](state) {
        return state.set('admin', true);
    },
    [ActionTypes.CHANGE_LANG](state, action) {
        return state.merge({
            userParams: { lang: action.lang },
            dict: getDict(action.lang),
        });
        // return state.setIn(['userParams', 'lang'], action.lang);
    },
    [ActionTypes.CHANGE_BACKGROUND](state, action) {
        return state.merge({ imageBackgroundSrc: action.src });
    },
    [ActionTypes.SHOW_SNACKBAR](state, action) {
        return state.merge({ SnackbarVisible: true, SnackbarMessage: action.msg });
    },
    [ActionTypes.CLOSE_SNACKBAR](state) {
        return state.merge({ SnackbarVisible: false });
    },
    [ActionTypes.SHOW_LOADER](state) {
        return state.merge({ loading: true });
    },
    [ActionTypes.CLOSE_LOADER](state) {
        return state.merge({ loading: false });
    },
});

const mainReducer = combineReducers({ viewReducer });

export default mainReducer;
