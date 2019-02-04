import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Immutable from 'seamless-immutable';
import * as ActionTypes from '../../consts/actionTypes';

const initialState = Immutable({
    isMenuOpened: true,
    blocked: true,
    container: [],
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
});

const mainReducer = combineReducers({ viewReducer });

export default mainReducer;
