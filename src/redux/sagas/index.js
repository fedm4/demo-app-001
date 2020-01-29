import { all } from 'redux-saga/effects';
import users from './users';
import user from './user';

export default function* rootSaga() {
    yield all([
        users(),
        user()
    ]);
}