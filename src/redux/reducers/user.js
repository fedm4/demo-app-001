import { 
    START_GET_USER,
    SUCCESS_GET_USER,
    ERROR_GET_USER,
    START_POST_USER,
    SUCCESS_POST_USER,
    ERROR_POST_USER
} from "../actions/user";

const userReducer = (state = {user:{}, loading:false, error: null}, action) => {
    switch (action.type) {
        case START_GET_USER:
            return { ...state, loading: true };
        case SUCCESS_GET_USER:
            return { ...state, user: action.user, loading: false }
        case ERROR_GET_USER:
            return { ...state, error: action.error, loading: false }
        case START_POST_USER:
            return { ...state, payload: action, loading: true };
        case SUCCESS_POST_USER:
            return { ...state, user: action.user, loading: false }
        case ERROR_POST_USER:
            return { ...state, error: action.error, loading: false }
        default: 
            return state;
    }
};

  export default userReducer;