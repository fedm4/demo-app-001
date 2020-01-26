import { START_GET_USERS, SUCCESS_GET_USERS, ERROR_GET_USERS } from "../actions/users";

const usersReducer = (state = {users:[], loading:false, error: null}, action) => {
    switch (action.type) {
        case START_GET_USERS:
            return { ...state, loading: true };
        case SUCCESS_GET_USERS:
            return { ...state, users: action.users, loading: false }
        case ERROR_GET_USERS:
            return { ...state, error: action.error, loading: false }
        default: 
            return state;
    }
};

  export default usersReducer;