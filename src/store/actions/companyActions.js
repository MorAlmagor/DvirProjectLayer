import * as actionTypes from './actionTypes';

export const saveCompanyData = (companyData) => {
  return {
    type: actionTypes.SAVE_COMPANY_DATA,
    payload: companyData,
  };
};