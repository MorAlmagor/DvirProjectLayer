export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
  console.log(email);
  console.log(password);
  return async dispatch => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signIn?key=AIzaSyB9TwILl4WehUFU2fzJTNYw2vpRAptkpVI',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const resData = await response.json();
    console.log(resData);
    dispatch({ type: SIGNUP });
  };
};