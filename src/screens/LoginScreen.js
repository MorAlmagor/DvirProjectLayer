/* eslint-disable radix */
/* eslint-disable space-in-parens */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Platform,
  Alert,
  AsyncStorage
  // Image
} from 'react-native';
import { useDispatch, connect } from 'react-redux';
import axios from 'axios';
import * as authActions from '../store/actions/auth';
import MainButton from '../components/UI/Buttons/MainButton';
import Colors from '../Colors/Colors';
import SpinerModal, {} from '../components/UI/Spiner/SpinerModal';
import { setUserData } from '../store/actions/userAction';
import { setTruckList } from '../store/actions/trucksAction';
import { setTrailerList } from '../store/actions/trailersAction';
import { saveCompanyData } from '../store/actions/companyActions';

const LoginScreen = ({
  navigation,
  onUpdateUserData,
  onUpdateTrucklist,
  onUpdateTrailerlist,
  onCompanyDataSave
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('bari@gmail.com');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('123456');
  
  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred', error, [{ text: 'Okay' }]);
    }
  }, [
    error
  ]);

  const authHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
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
      const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000);
      dispatch(authActions.authenticate(resData.idToken, resData.localId));
      saveUserTokenLocaly(resData.idToken, resData.localId, expirationDate);
      getUserFromServer(resData.idToken, resData.localId);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const saveUserTokenLocaly = (token, userId, expirationDate ) => {
    AsyncStorage.setItem('userData', JSON.stringify({
      token,
      userId,
      expirationDate: expirationDate.toISOString()
    }));
  };

  const getUserFromServer = (token, userId) => {
    axios.get(`https://dvir-project-server.firebaseio.com/users/-M-0uwVMgVBoGMdqHfp9.json?auth=${token}`)
      .then((res) => {
        const users = Object.keys(res.data);
        for (let i = 0; i < users.length; i += 1) {
          if (users[i] === userId) {
            userFoundGetDataFromServer(res.data[users[i]], token, userId);
            break;
          }
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Sorry, Cant Get User Details');
      });
  };

  const userFoundGetDataFromServer = (company, token, userUID) => {
    axios.get(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${company}.json?auth=${token}`)
      .then((res) => {
        findUser(userUID, res.data.drivers);
        onUpdateTrucklist(res.data.vehicle);
        onUpdateTrailerlist(res.data.trailers);
        onCompanyDataSave(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert('Sorry, Cant Get Company Details. Try Again');
      });
  };

  const findUser = async (userUID, driversDATA) => {
    const drivers = Object.keys(driversDATA);
    for (let i = 0; i < drivers.length; i += 1) {
      if (drivers[i] === userUID) {
        onUpdateUserData(driversDATA[drivers[i]]);
        break;
      }
    }
    navigation.navigate('Index');
  };

  return (
    <ScrollView>
      {isLoading && <SpinerModal />}
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}
      >
        <View style={styles.container}>
          <Text style={styles.textStyle}>Authenticate</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="johndoe@example.com"
            placeholderTextColor="grey"
            textContentType="username"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            keyboardType="default"
            textContentType="password"
            maxLength={12}
            value={password}
            onChangeText={setPassword}
          />
          {password.length < 12 && <Text style={styles.textWords}>Your password must be at least 8 characters</Text>}

          <MainButton onpress={() => authHandler()}>
            LOGIN
          </MainButton>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '10%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '50%',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  textStyle: {
    fontSize: Dimensions.get('window').height < 450 ? 16 : 20,
    fontWeight: 'bold',
    color: Colors.primary,
    paddingTop: Dimensions.get('window').height < 600 ? '60%' : '30%',
    paddingVertical: '5%',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  input: {
    height: 50,
    width: Dimensions.get('window').width < 450 ? 280 : 300,
    padding: 12,
    marginVertical: Dimensions.get('window').height < 450 ? 8 : 10,
    borderColor: '#aa0061',
    borderWidth: 1,
    borderRadius: 26,
    justifyContent: 'space-between',
    flexDirection: 'column',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  textWords: {
    color: 'grey',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    paddingBottom: 10
  },
  image: {
    alignItems: 'center',
    marginTop: '10%',
    borderRadius: 10
  }
});

const mapStateToProps = (state) => {
  return {
    userName: state.user.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUserData: (userData) => dispatch(setUserData(userData)),
    onUpdateTrucklist: (companyTruckList) => dispatch(setTruckList(companyTruckList)),
    onUpdateTrailerlist: (companyTrailerList) => dispatch(setTrailerList(companyTrailerList)),
    onCompanyDataSave: (companyData) => dispatch(saveCompanyData(companyData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);