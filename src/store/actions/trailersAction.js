import * as actionTypes from './actionTypes';

export const setTrailerList = (trailerList) => {
  return {
    type: actionTypes.SET_TRAILER_LIST,
    payload: trailerList,
  };
};