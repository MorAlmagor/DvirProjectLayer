import * as actionTypes from './actionTypes';

export const setTruckList = (truckList) => {
  return {
    type: actionTypes.SET_TRUCK_LIST,
    payload: truckList,
  };
};