import * as actionTypes from '../actions/actionTypes';

const initialState = {
  trailerModalTitle: '',
  trailer1ExpendSction: false,
  trailer2ExpendSction: false,
  userConnect: true,
  DATA: null,
  truckRaf: 40,
  trailerRaf: 30,
  oddsSummery: null,
  savedFormBool: false,
  postTripMode: false
  
};

const reducerUI = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_TRAILER_MODAL:
      return {
        ...state,
        trailerModalTitle: action.payload,
        
      };
    case actionTypes.SET_SAVED_FORM_BOOL:
      return {
        ...state,
        savedFormBool: action.payload
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
    case actionTypes.SET_POST_TRIP_MODE:
      return {
        ...state,
        postTripMode: action.payload
      };
    case actionTypes.SET_TRAILER_TITLE:
      return {
        ...state,
        trailerModalTitle: action.payload
      };
    case actionTypes.SET_ODDS_SUMMERY:
      return {
        ...state,
        oddsSummery: action.payload
      };
    default: return state;
  }
};

export default reducerUI;
