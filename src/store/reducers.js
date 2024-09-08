import {combineReducers} from 'redux';

import loginreducer from './Login/reducer';
import eventsReducer from './Event/reducer';

const rootReducer = combineReducers({
  loginreducer,
  eventsReducer,
});

export default rootReducer;
