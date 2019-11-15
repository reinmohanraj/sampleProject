import {createStore, applyMiddleware} from 'redux';
// import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';
import reducer from '../reducers/reducer'

const sagaMiddleware= createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;