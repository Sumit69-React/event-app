import {call, put, takeEvery, all, fork} from 'redux-saga/effects';

import {LOGIN} from './actionType';

import {loginSuccess, loginFail} from './action';

import {loginapi} from '../../helper/event_helper';
import {ToastAndroid} from 'react-native';

function* login({payload: rqeuserdata}) {
  try {
    console.log('rqeuserdata=====', rqeuserdata);
    const response = yield call(loginapi, rqeuserdata);
    console.log('response=====', response);
    yield put(loginSuccess(LOGIN, response));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN, login);
}

export default loginSaga;
