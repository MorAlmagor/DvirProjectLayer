import * as actionTypes from '../actions/actionTypes';

const initialState = {
  trailers: ''
};

const trailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TRAILER_LIST:
      return {
        ...state,
        trailers: action.payload,
      };
    default: return state;
  }
};

export default trailerReducer;
