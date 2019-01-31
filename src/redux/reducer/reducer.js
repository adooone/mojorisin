import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Immutable from 'seamless-immutable';
import * as ActionTypes from '../../consts/actionTypes';

const initialState = Immutable({
    test: 'Unblock',
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
});

const mainReducer = combineReducers({ viewReducer });

export default mainReducer;
