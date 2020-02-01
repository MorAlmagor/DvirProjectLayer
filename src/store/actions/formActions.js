import * as actionTypes from './actionTypes';

export const changeCheckTruckStatus = (keyId) => {
  return {
    type: actionTypes.CHANGE_CHECK_TRUCK_STATUS,
    payload: keyId
  };
};

export const setTruckNumber = (truckNum) => {
  return {
    type: actionTypes.SET_TRUCK_NUMBER,
    payload: truckNum
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

export const updateTrailer1 = (trailerData) => {
  return {
    type: actionTypes.UPDATE_TRAILER1,
    payload: trailerData
  };
};

export const updateTrailer2 = (trailerData) => {
  return {
    type: actionTypes.UPDATE_TRAILER2,
    payload: trailerData
  };
};

export const changeCarrier = (text) => {
  return {
    type: actionTypes.CHANGE_CARRIER,
    payload: text
  };
};

export const UpdateTruckStatus = (truckStatus) => {
  return {
    type: actionTypes.UPDATE_TRUCK_STATUS,
    payload: truckStatus
  };
};

export const removeTrailer1 = () => {
  return {
    type: actionTypes.REMOVE_TRAILER1,
  };
};

export const removeTrailer2 = () => {
  return {
    type: actionTypes.REMOVE_TRAILER2,
  };
};

export const switchTrailers = () => {
  return {
    type: actionTypes.SWITCH_TRAILERS,
  };
};