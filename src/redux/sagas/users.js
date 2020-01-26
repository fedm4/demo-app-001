import { put, call, takeLatest } from 'redux-saga/effects';
import Axios from 'axios';
import { START_GET_USERS, ERROR_GET_USERS, successGetUsers } from '../actions/users';

function* getUsers({payload}) {
    try {
        const res = yield call(Axios.get, 'https://jsonplaceholder.typicode.com/users');
        yield put(successGetUsers({users: res.data}));
    } catch(err) {
        yield put({type: ERROR_GET_USERS, error: err});
    }
}

export default function* users() {
    yield takeLatest(START_GET_USERS, getUsers);
}