import * as actionTypes from './actionTypes';

export const changeCheckTruckStatus = (keyId) => {
  return {
    type: actionTypes.CHANGE_CHECK_TRUCK_STATUS,
    payload: keyId
  };
};

export const changeCheckTrailer1Status = (keyId) => {
  return {
    type: actionTypes.CHANGE_CHECK_TRAILER1_STATUS,
    payload: keyId
  };
};

export const changeCheckTrailer2Status = (keyId) => {
  return {
    type: actionTypes.CHANGE_CHECK_TRAILER2_STATUS,
    payload: keyId
  };
};

export const setUserImage = (imageBase64) => {
  return {
    type: actionTypes.SET_USER_IMAGE,
    payload: imageBase64
  };
};

export const changeUserLocation = (latitude, longitude) => {
  return {
    type: actionTypes.CHANGE_USER_LOCATION,
    payload: { latitude, longitude }
  };
};

export const changeDate = (date) => {
  return {
    type: actionTypes.ON_DATE_UPDATE,
    payload: date
  };
};

export const changeOdometer = (newOdometer) => {
  return {
    type: actionTypes.ON_ODOMETER_UPDATE,
    payload: newOdometer
  };
};

export const updateTrailer1Number = (trailerNumber) => {
  return {
    type: actionTypes.UPDATE_TRAILER1_NUMBER,
    payload: trailerNumber
  };
};

export const updateTrailer2Number = (trailerNumber) => {
  return {
    type: actionTypes.UPDATE_TRAILER2_NUMBER,
    payload: trailerNumber
  };
};
