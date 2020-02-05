import * as actionTypes from './actionTypes';

export const setLastReports = (lastReportObj) => {
  return {
    type: actionTypes.SET_LAST_REPORT,
    payload: lastReportObj,
  };
};