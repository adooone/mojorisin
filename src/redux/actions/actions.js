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
