/* eslint-disable radix */
import { AsyncStorage } from 'react-native';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const authenticate = (token, userId) => {
  return { type: AUTHENTICATE, token, userId };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9TwILl4WehUFU2fzJTNYw2vpRAptkpVI',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorID = errorResData.error.message;
      let message = 'Something Went Worng!';
      if (errorID === 'EMAIL_NOT_FOUND') {
        message = 'Email Not Exsist in System';
      } else if (errorID === 'INVALID_PASSWORD') {
        message = 'This Password Is Not Valid';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    dispatch(authenticate(resData.idToken, resData.localId));
    const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000);
    autoLogin(resData.idToken, resData.localId, expirationDate);
  };
};

export const logout = (navigation) => {
  AsyncStorage.setItem('userData', JSON.stringify({
    token: null,
    userId: null,
    expirationDate: null
  }));
  navigation.navigate('Login');
};

const autoLogin = (token, userId, expirationDate) => {
  AsyncStorage.setItem('userData', JSON.stringify({
    token,
    userId,
    expirationDate: expirationDate.toISOString()
  }));
};