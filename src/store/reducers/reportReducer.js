import * as actionTypes from '../actions/actionTypes';

const initialState = {
  lastReport: ''
};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LAST_REPORT:
      return {
        ...state,
        lastReport: action.payload,
      };
    default: return state;
  }
};

export default reportReducer;