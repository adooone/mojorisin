import {
    createStore,
    applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import reducer from '../reducer/reducer';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
    collapsed: true,
    //
});

const store = createStore(
    reducer,
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
