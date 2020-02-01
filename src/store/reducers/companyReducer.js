import * as actionTypes from '../actions/actionTypes';

const initialState = {
  companyData: ''
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_COMPANY_DATA:
      return {
        ...state,
        companyData: action.payload,
      };
    default: return state;
  }
};

export default companyReducer;