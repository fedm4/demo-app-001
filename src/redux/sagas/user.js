import { put, call, takeLatest } from 'redux-saga/effects';
import Axios from 'axios';
import { 
    START_GET_USER,
    ERROR_GET_USER,
    successGetUser,
    START_POST_USER,
    ERROR_POST_USER,
    successPostUser
} from '../actions/user';

function* getUser({payload}) {
    try {
        const res = yield call(Axios.get, `https://jsonplaceholder.typicode.com/users/${payload.id}`);
        yield put(successGetUser({user: res.data}));
    } catch(err) {
        yield put({type: ERROR_GET_USER, error: err});
    }
}

function* postUser(payload) {
    try{
        const res = yield call(Axios.post, `https://jsonplaceholder.typicode.com/users`, payload);
        yield put(successPostUser({user: res.data}));
    } catch(err) {
        yield put({type: ERROR_POST_USER, error: err});
    }
}

export default function* user() {
    yield takeLatest(START_GET_USER, getUser);
    yield takeLatest(START_POST_USER, postUser);
}
