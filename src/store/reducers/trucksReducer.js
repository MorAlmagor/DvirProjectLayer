import * as actionTypes from '../actions/actionTypes';

const initialState = {
  trucks: ''
};

const trucksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TRUCK_LIST:
      return {
        ...state,
        trucks: action.payload,
      };
    default: return state;
  }
};

export default trucksReducer;
