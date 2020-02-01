/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  Text
} from 'react-native';
import axios from 'axios';
import { useDispatch, connect } from 'react-redux';
import Colors from '../Colors/Colors';
import * as authActions from '../store/actions/auth';
import { setUserData } from '../store/actions/userAction';
import { setTruckList } from '../store/actions/trucksAction';
import { setTrailerList } from '../store/actions/trailersAction';
import { changeCarrier } from '../store/actions/formActions';
import { saveCompanyData } from '../store/actions/companyActions';


const StartScreen = ({
  navigation,
  onUpdateUserData,
  onUpdateTrucklist,
  onUpdateTrailerlist,
  onCarrierUpdate,
  onCompanyDataSave
}) => {
  //
  const [skipBool, setSkipBool] = useState(false);

  useEffect(() => {
    setTimeout(() => setSkipBool(true), 5000);
  }, []);

  let skipButton = false;
  if (skipBool) {
    skipButton = (
      <View>
        <Text>Tap To Skip Auto-Login </Text>
      </View>
    );
  }

  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.getItem('userData').then((userData) => {
      if (!userData) {
        navigation.navigate('Login');
      } else {
        const transformData = JSON.parse(userData);
        if (transformData.token === null) {
          navigation.navigate('Login');
        } else {
          const { token, userId, expirationDate } = transformData;
          const expiryDate = new Date(expirationDate);
          if (expiryDate <= new Date() || !token || !userId) {
            navigation.navigate('Login');
          } else {
            axios.get(`https://dvir-project-server.firebaseio.com/users/-M-0uwVMgVBoGMdqHfp9.json?auth=${token}`)
              .then((res) => {
                const users = Object.keys(res.data);
                for (let i = 0; i < users.length; i += 1) {
                  if (users[i] === userId) {
                    userFoundGetDataFromServer(res.data[users[i]], token, userId);
                    break;
                  }
                }
                dispatch(authActions.authenticate(token, userId));
              })
              .catch((err) => {
                console.log(err);
                alert('Sorry, auto-login failed');
                navigation.navigate('Login');
              });
          }
        }
      }
    });
  }, []);
  //
  const userFoundGetDataFromServer = (company, token, userUID) => {
    axios.get(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${company}.json?auth=${token}`)
      .then((res) => {
        // להוסיף promise עדכון של היוזר
        findUser(userUID, res.data.drivers);
        onUpdateTrucklist(res.data.vehicle);
        onUpdateTrailerlist(res.data.trailers);
        onCarrierUpdate(company);
        onCompanyDataSave(res.data);
        navigation.navigate('Index');
      })
      .catch((err) => {
        console.log(err);
        navigation.navigate('Login');
      });
  };

  const findUser = (userUID, driversDATA) => {
    const drivers = Object.keys(driversDATA);
    for (let i = 0; i < drivers.length; i += 1) {
      if (userUID === drivers[i]) {
        onUpdateUserData(driversDATA[drivers[i]]);
        break;
      }
    }
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/bigLogo.png')}
          navigation={navigation}
        />
      </View>
      {skipButton}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: '100%',
    alignItems: 'center',
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').width * 1,
  },
  image: {
    alignItems: 'center',
    bottom: Dimensions.get('window').height < 500 ? 100 : 180,
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUserData: (userData) => dispatch(setUserData(userData)),
    onUpdateTrucklist: (companyTruckList) => dispatch(setTruckList(companyTruckList)),
    onUpdateTrailerlist: (companyTrailerList) => dispatch(setTrailerList(companyTrailerList)),
    onCarrierUpdate: (text) => dispatch(changeCarrier(text)),
    onCompanyDataSave: (companyData) => dispatch(saveCompanyData(companyData))
  };
};

export default connect(null, mapDispatchToProps)(StartScreen);
