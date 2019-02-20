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
    selectedModule: Modules[0],
    selectedAlbum: null,
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
        return state;
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
    [ActionTypes.CHANGE_LANG](state, action) {
        return state.merge({
            userParams: { lang: action.lang },
            dict: getDict(action.lang),
        });
        // return state.setIn(['userParams', 'lang'], action.lang);
    },
});

const mainReducer = combineReducers({ viewReducer });

export default mainReducer;
