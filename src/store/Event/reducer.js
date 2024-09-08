import {
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
  RESET_LOGIN_CODE,
  RESET_EVENTS_CODE,
  SET_FAVOURITE_EVENTS,
} from './actionType';

const INIT_STATE = {
  eventsData: [],
  favouriteEventsData: [],
};

const eventsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_EVENTS_SUCCESS:
      switch (action.payload.actionType) {
        case GET_EVENTS:
          return {
            ...state,
            eventsData: action.payload.data.data.events,
          };

        default:
          return {...state};
      }
    case GET_EVENTS_FAIL:
      switch (action.payload.actionType) {
        case GET_EVENTS:
          return {
            ...state,
            error: action.payload.error,
          };
        default:
          return {...state};
      }

    case RESET_EVENTS_CODE:
      return {
        ...state,
        eventsData: [],
      };

    case SET_FAVOURITE_EVENTS:
      return {
        ...state,
        // favouriteEventsData: action.payload.data,
        eventsData: action.payload.data,
      };

    default:
      return state;
  }
};

export default eventsReducer;
