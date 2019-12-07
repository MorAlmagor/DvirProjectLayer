import * as actionTypes from './actionTypes';

export const openTrailerModal = (title) => {
  return {
    type: actionTypes.OPEN_TRAILER_MODAL,
    payload: title,

  };
};

export const changeModalShow = () => {
  return {
    type: actionTypes.CHANGE_MODAL_SHOW,
  };
};

export const ExpandSectionTrailer1 = () => {
  return {
    type: actionTypes.EXPAND_SECTION_TRAILER1,
  };
};

export const ExpandSectionTrailer2 = () => {
  return {
    type: actionTypes.EXPAND_SECTION_TRAILER2,
  };
};

export const userIsConnect = (status) => {
  return {
    type: actionTypes.USER_IS_CONNECT,
    payload: status
  };
};

export const setData = (DATA) => {
  return {
    type: actionTypes.SET_DATA,
    payload: DATA
  };
};