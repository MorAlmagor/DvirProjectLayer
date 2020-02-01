/* eslint-disable no-else-return */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  NetInfo,
  Alert,
  Image,
  AsyncStorage
} from 'react-native';
import { userIsConnect } from '../store/actions/appUiActions';
import MainButton from '../components/UI/Buttons/MainButton';
import * as authActions from '../store/actions/auth';

const IndexScreen = ({
  navigation,
  onUserConnection,
  userIsConnected,
  userName,
  TripStatus
}) => {
  const dispatch = useDispatch();
  const [userFirstTime, setUserFirstTime] = useState(null);
  setTimeout(() => {
    CheckConnectivity();
  }, 1000);

  const CheckConnectivity = () => {
    if (Platform.OS === 'android') {
      NetInfo.isConnected.fetch().then((isConnected) => {
        if (isConnected) {
          onUserConnection(isConnected);
        } else {
          onUserConnection(isConnected);
        }
      });
    } else {
      NetInfo.isConnected.addEventListener(
        'connectionChange',
        handleFirstConnectivityChange()
      );
    }
  };

  const handleFirstConnectivityChange = (isConnected) => {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      handleFirstConnectivityChange
    );

    if (isConnected === false) {
      Alert.alert('You Are Offline! \n Please Check Your Connection');
      onUserConnection(isConnected);
    } else {
      onUserConnection(isConnected);
    }
  };

  const logoutHandler = async (nav) => {
    const action = authActions.logout(nav);
    await dispatch(action);
    navigation.navigate('Login');
  };

  if (userIsConnected) {
    AsyncStorage.getItem('firstTimeUser')
      .then((req) => JSON.parse(req))
      .then((json) => setUserFirstTime(json))
      .catch(() => alert('error!'));
    if (!userFirstTime) {
      return (
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={require('../../assets/ic_just2.png')}
            />
          </View>
          <Text style={styles.userNameText}>
            Hello {userName}
          </Text>
          <View style={styles.buttonsContainer}>
            <MainButton onpress={() => navigation.navigate('SelectTruck')}>Pre-Trip</MainButton>
            <MainButton onpress={() => logoutHandler(navigation)}>Logout</MainButton>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={require('../../assets/ic_just2.png')}
            />
          </View>
          <Text style={styles.userNameText}>
            Hello {userName}
          </Text>
          <View style={styles.buttonsContainer}>
            {!TripStatus
              ? <MainButton onpress={() => navigation.navigate('SelectTruck')}>Pre-Trip</MainButton>
              : <MainButton onpress={() => navigation.navigate('Camera')}>Post-Trip</MainButton>}
            {userFirstTime === null ? null : <MainButton onpress={() => navigation.navigate('Reports')}>Old-Reports</MainButton>}
            <MainButton onpress={() => logoutHandler(navigation)}>Logout</MainButton>
          </View>
        </View>
      );
    }
  }
  if (!userIsConnected) {
    return (
      <View style={styles.container}>
        <Text style={styles.offlineText}>You Are Offline</Text>
        <Text style={styles.offlineText}>Please Check Your Connection</Text>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/ic_just2.png')}
          />
        </View>
        <View style={styles.offlineButtonsContainer}>
          <MainButton onpress={() => navigation.navigate('Camera')}>Pre-Trip</MainButton>
          <MainButton onpress={() => navigation.navigate('Camera')}>Post-Trip</MainButton>
          <MainButton onpress={() => navigation.navigate('Reports')}>Old-Reports</MainButton>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  buttonsContainer: {
    height: '40%',
    justifyContent: 'space-around',
    marginTop: '25%'
  },
  offlineButtonsContainer: {
    height: '53%',
    justifyContent: 'space-around',
  },
  container: {
    alignItems: 'center',
    marginTop: '10%'
  },
  userNameText: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    color: '#222830',
    top: '15%'
  },
  image: {
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '2%'
    // bottom: Dimensions.get('window').height < 500 ? 100 : 180
  },
  offlineText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20
  }
});

const mapStateToProps = (state) => {
  return {
    userIsConnected: state.appUI.userConnect,
    DATA: state.appUI.DATA,
    userName: state.user.name,
    TripStatus: state.user.tripStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserConnection: (isConnect) => dispatch(userIsConnect(isConnect))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexScreen);
