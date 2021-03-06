export const START_GET_USER = "START_GET_USER";
export const SUCCESS_GET_USER = "SUCCESS_GET_USER";
export const ERROR_GET_USER = "ERROR_GET_USER";
export const START_POST_USER = "START_POST_USER";
export const SUCCESS_POST_USER = "SUCCESS_POST_USER";
export const ERROR_POST_USER = "ERROR_POST_USER";
export const START_PUT_USER = "START_PUT_USER";
export const SUCCESS_PUT_USER = "SUCCESS_PUT_USER";
export const ERROR_PUT_USER = "ERROR_PUT_USER";
export const CLEAR_ERROR_USER = "CLEAR_ERROR_USER";
 
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
    payload
});

export const successPostUser = payload => ({
    type: SUCCESS_POST_USER,
    ...payload
});

export const errorPostUser = payload => ({
    type: ERROR_POST_USER,
    ...payload
});

// PUT
export const startPutUser = payload => ({
    type: START_PUT_USER,
    payload
});

export const successPutUser = payload => ({
    type: SUCCESS_PUT_USER,
    ...payload
});

export const errorPutUser = payload => ({
    type: ERROR_PUT_USER,
    ...payload
});

export const clearErrorUser = () => ({
    type: CLEAR_ERROR_USER
});
