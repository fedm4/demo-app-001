import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxSaga from 'redux-saga';
import rootSaga from '../sagas';
import usersReducer from '../reducers/users';
import userReducer from '../reducers/user';
const sagaMiddleware = reduxSaga();

const reducers = combineReducers({users: usersReducer, user: userReducer});

export default () => {
    const store = createStore(reducers, applyMiddleware(sagaMiddleware));
    return {
        ...store,
        runSaga: sagaMiddleware.run(rootSaga)
    };
};