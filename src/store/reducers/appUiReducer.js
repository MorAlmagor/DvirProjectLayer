import * as actionTypes from '../actions/actionTypes';

const initialState = {
  trailerModalTitle: '',
  trailerModalShow: false,
  trailer1ExpendSction: false,
  trailer2ExpendSction: false,
  userConnect: true,
  DATA: null
};

const reducerUI = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_TRAILER_MODAL:
      return {
        ...state,
        trailerModalTitle: action.payload,
        trailerModalShow: true
      };
    case actionTypes.CHANGE_MODAL_SHOW:
      return {
        ...state,
        trailerModalShow: false
      };
    case actionTypes.EXPAND_SECTION_TRAILER1:
      return {
        ...state,
        trailer1ExpendSction: !state.trailer1ExpendSction
      };
    case actionTypes.EXPAND_SECTION_TRAILER2:
      return {
        ...state,
        trailer2ExpendSction: !state.trailer2ExpendSction
      };
    case actionTypes.USER_IS_CONNECT:
      return {
        ...state,
        userConnect: action.payload
      };
    case actionTypes.SET_DATA:
      return {
        ...state,
        DATA: action.payload
      };
    default: return state;
  }
};

export default reducerUI;
