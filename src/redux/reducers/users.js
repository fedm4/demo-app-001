import { START_GET_USERS, SUCCESS_GET_USERS, ERROR_GET_USERS, ADD_USER_TO_LIST } from "../actions/users";

const usersReducer = (state = {users:[], loading:false, error: null}, action) => {
    switch (action.type) {
        case START_GET_USERS:
            return { ...state, loading: true };
        case SUCCESS_GET_USERS:
            return { ...state, users: action.users, loading: false }
        case ERROR_GET_USERS:
            return { ...state, error: action.error, loading: false }
        case ADD_USER_TO_LIST:
            const user = {
                name: action.user.name,
                username: action.user.username,
                email: action.user.email,
                id: action.user.id
            };
            return { ...state, users: [...state.users, user], loading: false }
        default: 
            return state;
    }
};

  export default usersReducer;