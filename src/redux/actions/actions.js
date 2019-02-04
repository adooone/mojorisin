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
