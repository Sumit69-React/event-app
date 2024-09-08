import {all, fork} from 'redux-saga/effects';

import loginSaga from './Login/saga';
import eventsSaga from './Event/saga';

export default function* rootSaga() {
  yield all([fork(loginSaga), fork(eventsSaga)]);
}
