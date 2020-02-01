import { put, call, takeLatest } from 'redux-saga/effects';
import Axios from 'axios';
import { 
    START_GET_USER,
    ERROR_GET_USER,
    successGetUser,
    START_POST_USER,
    errorPostUser,
    successPostUser
} from '../actions/user';
import { addUserToList } from '../actions/users';

function* getUser({payload}) {
    try {
        const res = yield call(Axios.get, `https://jsonplaceholder.typicode.com/users/${payload.id}`);
        yield put(successGetUser({user: res.data}));
    } catch(err) {
        yield put({type: ERROR_GET_USER, error: err});
    }
}

function* postUser({user, username, email}) {
    try{
        const res = yield call(Axios.post, `https://jsonplaceholder.typicode.com/users`, {user, username, email});
        //yield put(successPostUser({user: res.data}));
        //yield put(addUserToList({user: res.data}));
        yield put(errorPostUser({error: "error"}));
    } catch(err) {
        yield put(errorPostUser({error: err}));
    }
}

export default function* user() {
    yield takeLatest(START_GET_USER, getUser);
    yield takeLatest(START_POST_USER, postUser);
}
