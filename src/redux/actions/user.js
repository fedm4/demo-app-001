export const START_GET_USER = "START_GET_USER";
export const SUCCESS_GET_USER = "SUCCESS_GET_USER";
export const ERROR_GET_USER = "ERROR_GET_USER";
export const START_POST_USER = "START_POST_USER";
export const SUCCESS_POST_USER = "SUCCESS_POST_USER";
export const ERROR_POST_USER = "ERROR_POST_USER";


export const startGetUser = payload => ({
    type: START_GET_USER,
    ...payload
});

export const successGetUser = payload => ({
    type: SUCCESS_GET_USER,
    ...payload
});

export const errorGetUser = payload => ({
    type: ERROR_GET_USER,
    ...payload
});


// POST
export const startPostUser = payload => ({
    type: START_POST_USER,
    ...payload
});

export const successPostUser = payload => ({
    type: SUCCESS_POST_USER,
    ...payload
});

export const errorPostUser = payload => ({
    type: ERROR_POST_USER,
    ...payload
});
