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
