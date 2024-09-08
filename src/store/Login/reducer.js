import {LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, RESET_LOGIN_CODE} from './actionType';

const INIT_STATE = {
  loginData: [],
  loginCode: '',
  loginMsg: '',
};

const loginreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      //   console.log('action.payload.data=====', action.payload);
      switch (action.payload.actionType) {
        case LOGIN:
          return {
            ...state,
            loginData: action.payload.data.data,
            loginCode: action.payload.data.success,
            loginMsg: action.payload.data.message,
          };

        default:
          return {...state};
      }
    case LOGIN_FAIL:
      switch (action.payload.actionType) {
        case LOGIN:
          return {
            ...state,
            error: action.payload.error,
          };
        default:
          return {...state};
      }

    case RESET_LOGIN_CODE:
      return {
        ...state,
        loginData: [],
        loginCode: '',
        loginMsg: '',
      };

    default:
      return state;
  }
};

export default loginreducer;
