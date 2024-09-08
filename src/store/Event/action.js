import {
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
  RESET_EVENTS_CODE,
  SET_FAVOURITE_EVENTS,
} from './actionType';

// common success
export const getEvents = rqeuserdata => ({
  type: GET_EVENTS,
  payload: rqeuserdata,
});

export const getEventsSuccess = (actionType, data) => ({
  type: GET_EVENTS_SUCCESS,
  payload: {actionType, data},
});

export const getEventsFail = (actionType, error) => ({
  type: GET_EVENTS_FAIL,
  payload: {actionType, error},
});

export const resetEvents = rqeuserdata => ({
  type: RESET_EVENTS_CODE,
});

export const setFavouriteEvent = rqeuserdata => ({
  type: SET_FAVOURITE_EVENTS,
  payload: rqeuserdata,
});
