import {call, put, takeEvery, all, fork} from 'redux-saga/effects';

import {GET_EVENTS} from './actionType';

import {getEventsSuccess, getEventsFail} from './action';

import {getEventsApi} from '../../helper/event_helper';

function* getEvents({payload: rqeuserdata}) {
  try {
    console.log('rqeuserdata=====', rqeuserdata);
    const response = yield call(getEventsApi, rqeuserdata);
    console.log('response=====', response);
    yield put(getEventsSuccess(GET_EVENTS, response));
  } catch (error) {
    yield put(getEventsFail(error));
  }
}

function* eventsSaga() {
  yield takeEvery(GET_EVENTS, getEvents);
}

export default eventsSaga;
