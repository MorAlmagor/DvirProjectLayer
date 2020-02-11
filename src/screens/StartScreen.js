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
import { setPostTripMode } from '../store/actions/appUiActions';
import { saveCompanyData } from '../store/actions/companyActions';
import { setLastReports } from '../store/actions/reportAction';
import {
  changeCarrier,
  setTruckNumber,
  changeOdometer,
  UpdateTruckStatus,
  updateTrailer1,
  updateTrailer2
} from '../store/actions/formActions';


const StartScreen = ({
  navigation,
  onUpdateUserData,
  onUpdateTrucklist,
  onUpdateTrailerlist,
  onCarrierUpdate,
  onCompanyDataSave,
  onSaveTruckNumber,
  onOdometerUpdate,
  onUpdateTruckStatus,
  onSelectTrailer1,
  onSelectTrailer2,
  onSetPostTripMode,
  onSetLastReport
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
        findUser(userUID, res.data.drivers, res.data.vehicle, res.data, company, token);
      })
      .catch((err) => {
        console.log(err);
        navigation.navigate('Login');
      });
  };

  const getLastTruckReportFromServer = (company, truckNumber, token) => {
    axios.get(`https://dvir-project-server.firebaseio.com/reports/-M-LnoFF1RuOGySki32y/${company}/${truckNumber}.json?auth=${token}`)
      .then((res) => {
        onSetLastReport(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigation.navigate('Login');
      });
  };

  const findUser = (userUID, driversDATA, trucksData, bigData, company, token) => {
    AsyncStorage.setItem('userCompany', JSON.stringify(company));
    onCarrierUpdate(company);
    onUpdateTrucklist(bigData.vehicle);
    onUpdateTrailerlist(bigData.trailers);
    onCompanyDataSave(bigData);
    const drivers = Object.keys(driversDATA);
    for (let i = 0; i < drivers.length; i += 1) {
      if (userUID === drivers[i]) {
        onUpdateUserData(driversDATA[drivers[i]]);
        // POST TRIP MODE //
        if (driversDATA[drivers[i]].bindTruck !== false) {
          onSetPostTripMode(true);
          onSaveTruckNumber(driversDATA[drivers[i]].bindTruck);
          onOdometerUpdate(trucksData[driversDATA[drivers[i]].bindTruck].addomer);
          onUpdateTruckStatus(bigData.vehicle[driversDATA[drivers[i]].bindTruck].status);
          if (driversDATA[drivers[i]].bindTrailer1) {
            onSelectTrailer1(bigData.trailers[driversDATA[drivers[i]].bindTrailer1]);
          }
          if (driversDATA[drivers[i]].bindTrailer2) {
            onSelectTrailer2(bigData.trailers[driversDATA[drivers[i]].bindTrailer2]);
          }
          getLastTruckReportFromServer(company, driversDATA[drivers[i]].bindTruck, token);
          navigation.navigate('Index');
        } else {
          navigation.navigate('Index');
        }
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
    onCompanyDataSave: (companyData) => dispatch(saveCompanyData(companyData)),
    onSaveTruckNumber: (truckNum) => dispatch(setTruckNumber(truckNum)),
    onOdometerUpdate: (odometer) => dispatch(changeOdometer(odometer)),
    onUpdateTruckStatus: (truckData) => dispatch(UpdateTruckStatus(truckData)),
    onSelectTrailer1: (trailerData) => dispatch(updateTrailer1(trailerData)),
    onSelectTrailer2: (trailerData) => dispatch(updateTrailer2(trailerData)),
    onSetPostTripMode: (bool) => dispatch(setPostTripMode(bool)),
    onSetLastReport: (lastReportObj) => dispatch(setLastReports(lastReportObj))
  };
};

export default connect(null, mapDispatchToProps)(StartScreen);
