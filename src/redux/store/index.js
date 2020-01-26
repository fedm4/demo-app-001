import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxSaga from 'redux-saga';
import rootSaga from '../sagas';
import usersReducer from '../reducers/users';
const sagaMiddleware = reduxSaga();

const reducers = combineReducers({users: usersReducer});

export default () => {
    const store = createStore(reducers, applyMiddleware(sagaMiddleware));
    return {
        ...store,
        runSaga: sagaMiddleware.run(rootSaga)
    };
};