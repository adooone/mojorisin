import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Immutable from 'seamless-immutable';
import * as ActionTypes from '../../consts/actionTypes';
import { getDict } from '../../dictionary';
import { LANG_EN } from '../../consts/generalConsts';
import Modules from '../../description/modules';
// import photos from '../../description/photos';

const initialState = Immutable({
    isMenuOpened: false,
    selectedModule: Modules[1],
    selectedAlbum: null,
    loading: true,
    admin: false,
    complexBackground: true,
    imageBackgroundSrc: 'https://cn.opendesktop.org/img/f/c/2/7/026c18b8da5fd20734e179b3a01a83bf3962.jpg',
    // SnackbarMessage: { status: 200, text: 'Success' },
    SnackbarMessage: {},
    SnackbarVisible: false,
    userParams: {
        lang: LANG_EN,
        //
    },
    dict: getDict(LANG_EN),
});

const viewReducer = createReducer(initialState, {
    [ActionTypes.RESET_APP]() {
        return initialState;
    },
    [ActionTypes.OPEN](state) {
        return state.set('loading', false);
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
        return state.set('selectedAlbum', action.album);
    },
    [ActionTypes.CLOSE_ALBUMS](state) {
        return state.set('selectedAlbum', null);
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
});

const mainReducer = combineReducers({ viewReducer });

export default mainReducer;
