/* eslint-disable prefer-destructuring */
/* eslint-disable no-lonely-if */
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
  AsyncStorage,
} from 'react-native';
import { userIsConnect, setSavedFormBool } from '../store/actions/appUiActions';
import MainButton from '../components/UI/Buttons/MainButton';
import * as authActions from '../store/actions/auth';

const IndexScreen = ({
  navigation,
  onUserConnection,
  userIsConnected,
  userName,
  TripStatus,
}) => {
  const dispatch = useDispatch();
  const [userFirstTime, setUserFirstTime] = useState(null);
  const [lock, setLock] = useState(false);
  setTimeout(() => {
    CheckConnectivity();
  }, 1000);

  if (navigation.state.params !== undefined) {
    const type = navigation.state.params.type;
    if (type === 'lockApp') {
      if (lock === false) {
        setLock(true);
      }
    }
  }
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
    Alert.alert(
      'Are Sure?',
      'Connection details will be removed from the system',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'OK', onPress: () => logOutActions(nav) },
      ],
      { cancelable: false },
    );
  };

  const logOutActions = async (nav) => {
    const action = authActions.logout(nav);
    await dispatch(action);
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
      if (lock) {
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
            {/* {savedForm && <Text style={styles.offlineText}>
                You have form Saved Loclaly in old reports section
              </Text>} */}
            <View style={styles.buttonsContainer}>
              {TripStatus
                ? <MainButton onpress={() => alert('Successfully submitted form You will not be able to submit forms any time soon')}>Pre-Trip</MainButton>
                : <MainButton onpress={() => navigation.navigate('Dvir')}>Post-Trip</MainButton>}
              {userFirstTime === null ? null : <MainButton onpress={() => navigation.navigate('Reports')}>Old-Reports</MainButton>}
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
            {/* אחי אני לא מצליח לגרום פה לרנדר אני אמור להציג את השורה הזאת שיש טופס שמור זה נמצא ב old report  */}
            {/* {savedForm && <Text style={styles.offlineText}>
              You have form Saved Loclaly in old reports section
            </Text>} */}
            <View style={styles.buttonsContainer}>
              {!TripStatus
                ? <MainButton onpress={() => navigation.navigate('SelectTruck')}>Pre-Trip</MainButton>
                : <MainButton onpress={() => navigation.navigate('Dvir')}>Post-Trip</MainButton>}
              {userFirstTime === null ? null : <MainButton onpress={() => navigation.navigate('Reports')}>Old-Reports</MainButton>}
              <MainButton onpress={() => logoutHandler(navigation)}>Logout</MainButton>
            </View>
          </View>
        );
      }
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
          <MainButton onpress={() => CheckConnectivity}>Refresh</MainButton>
          <MainButton onpress={() => navigation.navigate('Reports')}>Old-Reports</MainButton>
          <MainButton onpress={() => logoutHandler(navigation)}>Logout</MainButton>
        </View>
      </View>
    );
  }
};

IndexScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  buttonsContainer: {
    height: '40%',
    justifyContent: 'space-around',
    marginTop: '25%'
  },
  offlineButtonsContainer: {
    height: '30%',
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
    TripStatus: state.user.tripStatus,
    savedForm: state.appUI.savedFormBool
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserConnection: (isConnect) => dispatch(userIsConnect(isConnect)),
    onSavedFormAlert: (bool) => dispatch(setSavedFormBool(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexScreen);
