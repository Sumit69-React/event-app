import {LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, RESET_LOGIN_CODE} from './actionType';

// common success
export const login = rqeuserdata => ({
  type: LOGIN,
  payload: rqeuserdata,
});

export const loginSuccess = (actionType, data) => ({
  type: LOGIN_SUCCESS,
  payload: {actionType, data},
});

export const loginFail = (actionType, error) => ({
  type: LOGIN_FAIL,
  payload: {actionType, error},
});

export const resetLoginCode = rqeuserdata => ({
  type: RESET_LOGIN_CODE,
});
