import * as actionTypes from '../actions/actionTypes';

const initialState = {
  block: '',
  age: '',
  driverID: '',
  id: '',
  lastName: '',
  licenceNum: '',
  licenceType: '',
  mail: '',
  name: '',
  phoneNumber: '',
  tripStatus: '',
  userID: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        age: action.payload.age,
        driverID: action.payload.driverID,
        id: action.payload.id,
        lastName: action.payload.lastName,
        licenceNum: action.payload.licenceNum,
        licenceType: action.payload.licenceType,
        mail: action.payload.mail,
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber,
        tripStatus: action.payload.tripStatus,
        userID: action.payload.userID,
        block: action.payload.block
      };
    default: return state;
  }
};

export default userReducer;
