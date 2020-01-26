export const START_GET_USERS = "START_USERS";
export const SUCCESS_GET_USERS = "SUCCESS_GET_USERS";
export const ERROR_GET_USERS = "ERROR_GET_USERS";

export const startGetUsers = payload => ({
    type: START_GET_USERS,
    ...payload
});

export const successGetUsers = payload => ({
    type: SUCCESS_GET_USERS,
    ...payload
});

export const errorGetUsers = payload => ({
    type: ERROR_GET_USERS,
    ...payload
});
