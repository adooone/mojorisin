import * as ActionTypes from '../../consts/actionTypes';

export const RESET_APP = () => {
    return { type: ActionTypes.RESET_APP };
};
export const OPEN = (params) => {
    return {
        type: ActionTypes.OPEN,
        params,
    };
};
export const OPEN_MENU = () => {
    return { type: ActionTypes.OPEN_MENU };
};
export const CLOSE_MENU = () => {
    return { type: ActionTypes.CLOSE_MENU };
};
export const OPEN_MODULE = (module) => {
    return {
        type: ActionTypes.OPEN_MODULE,
        module,
    };
};
export const OPEN_ALBUM = (album) => {
    return {
        type: ActionTypes.OPEN_ALBUM,
        album,
    };
};
export const SET_PHOTO_DATA = (photoData) => {
    return {
        type: ActionTypes.SET_PHOTO_DATA,
        photoData,
    };
};
export const CLOSE_ALBUMS = () => {
    return { type: ActionTypes.CLOSE_ALBUMS };
};
export const LOGIN_ADMIN = () => {
    return { type: ActionTypes.LOGIN_ADMIN };
};
export const CHANGE_LANG = (lang) => {
    return {
        type: ActionTypes.CHANGE_LANG,
        lang,
    };
};
export const CHANGE_BACKGROUND = (src) => {
    return {
        type: ActionTypes.CHANGE_BACKGROUND,
        src,
    };
};
export const SHOW_SNACKBAR = (msg) => {
    return {
        type: ActionTypes.SHOW_SNACKBAR,
        msg,
    };
};
export const CLOSE_SNACKBAR = () => {
    return { type: ActionTypes.CLOSE_SNACKBAR };
};
export const SHOW_LOADER = () => {
    return { type: ActionTypes.SHOW_LOADER };
};
export const CLOSE_LOADER = () => {
    return { type: ActionTypes.CLOSE_LOADER };
};

//SAGAS
export const TEST_FETCH = (name) => {
    return {
        type: ActionTypes.TEST_FETCH,
        name,
    };
};
export const GET_PHOTOS = (album) => {
    return {
        type: ActionTypes.GET_PHOTOS,
        album,
    };
};
export const UPLOAD_FILE = (data) => {
    return {
        type: ActionTypes.UPLOAD_FILE,
        data,
    };
};
export const DELETE_FILE = (data) => {
    return {
        type: ActionTypes.DELETE_FILE,
        data,
    };
};
export const NEPTUNE_LOGIN = (name, password) => {
    return {
        type: ActionTypes.NEPTUNE_LOGIN,
        name,
        password,
    };
};
