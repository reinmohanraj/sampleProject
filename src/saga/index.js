import { put, takeLatest, all } from 'redux-saga/effects';
import {apiCall} from './apiCall';

function* registerUser(action) {
    const resp= yield apiCall('http://localhost:4000/users/register', 'POST', action.payload);
    yield put( { type: "REGISTER_SUCCESS", json: resp});
}

function* loginUser(action){
    const resp= yield apiCall('http://localhost:4000/users/login', 'POST', action.payload);
    yield put({ type: "LOGIN_SUCCESS", json: resp});
}

function* fetchUser(action){
    const resp= yield apiCall(`http://localhost:4000/users?userName=${action.payload}`, 'GET');
    yield put({ type: "FETCH_USER_DETAILS_SUCCESS", json: resp});
}

function* updateUser(action){
    const resp= yield apiCall(`http://localhost:4000/users?userName=${action.payload.userName}`, 'PUT', action.payload);
    yield put({ type: "EDIT_USER_DETAILS_SUCCESS", json: resp});
}

function* deleteUser(action){
    const resp= yield apiCall(`http://localhost:4000/users?userName=${action.payload}`, 'DELETE');
    yield put({ type: "EDIT_USER_DETAILS_SUCCESS", json: resp});
}

function* actionWatcher(){
    yield takeLatest('REGISTER', registerUser);
    yield takeLatest('LOGIN', loginUser);
    yield takeLatest('FETCH_USER_DETAILS', fetchUser);
    yield takeLatest('EDIT_USER_DETAILS', updateUser);
    yield takeLatest('DELETE_USER_DETAILS', deleteUser);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}