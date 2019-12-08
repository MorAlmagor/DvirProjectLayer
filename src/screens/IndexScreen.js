/* eslint-disable no-alert */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { connect } from 'react-redux';
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

const IndexScreen = ({
  userName,
  navigation,
  onUserConnection,
  userIsConnected,
}) => {
  const [LocalData, setLocalData] = useState();
  // לא לשכוח דביר סטאטוס //
  const dvirStatus = true;

  // DONT FORGOT TIMER //
  setTimeout(() => {
    CheckConnectivity();
  }, 1000);


  const CheckConnectivity = () => {
    // For Android devices
    if (Platform.OS === 'android') {
      NetInfo.isConnected.fetch().then((isConnected) => {
        if (isConnected) {
          onUserConnection(isConnected);
        } else {
          onUserConnection(isConnected);
        }
      });
    } else {
      // For iOS devices
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

  if (userIsConnected) {
    AsyncStorage.getItem('aocalDATA')
      .then((req) => JSON.parse(req))
      .then((json) => setLocalData(json))
      .catch(() => alert('error!'));
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/ic_just2.png')}
          />
        </View>
        {LocalData.length > 0
          && <Text style={styles.offlineText}>Dont Forget Your Saved Form In Old Reports</Text>}
        <Text style={styles.userNameText}>
          Hello {userName}
        </Text>
        <View style={styles.buttonsContainer}>
          {dvirStatus
            ? <MainButton onpress={() => navigation.navigate('Camera')}>Pre-Trip</MainButton>
            : <MainButton onpress={() => navigation.navigate('Camera')}>Post-Trip</MainButton>}
          <MainButton onpress={() => navigation.navigate('Reports')}>Old-Reports</MainButton>
        </View>
      </View>
    );
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

IndexScreen.defaultProps = {
  userName: 'Yaron'
};

const mapStateToProps = (state) => {
  return {
    userIsConnected: state.appUI.userConnect,
    DATA: state.appUI.DATA
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserConnection: (isConnect) => dispatch(userIsConnect(isConnect))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexScreen);
