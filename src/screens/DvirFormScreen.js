/* eslint-disable no-alert */
/* eslint-disable padded-blocks */
/* eslint-disable dot-notation */
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-template */
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Platform,
  Alert,
  NetInfo,
  AsyncStorage,
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import Form from '../components/Form/Form';
import FormSubmission from '../components/FormSubmission/FormSubmission';
import Modal from '../components/UI/Modals/DvirSummeryModal';
import AddTrailerModal from '../components/UI/Modals/AddTrailerModal';
import FormIntroSection from '../components/Form/FormIntroSection';
import SpinerModal from '../components/UI/Spiner/SpinerModal';
import { setData } from '../store/actions/appUiActions';

const DvirFormScreen = ({
  navigation,
  truckProperties,
  trailerModal,
  fromState,
  onSaveData,
  token
}) => {

  console.log(token);
  const cleanUpHandler = () => {
    setModalShow(false);
    setCheckBoxValue(false);
    setClicked(false);
    submitForm();
  };
  
  const [modalShow, setModalShow] = useState(false);
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
 
  
  const submitForm = () => {
    //
    

    setLoading(true);
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const stringMinuts = minutes.toString();
    let currentMinuts;
    if (stringMinuts.length === 1) {
      currentMinuts = '0' + stringMinuts;
    } else {
      currentMinuts = stringMinuts;
    }
    const currentTime = hours + ' : ' + currentMinuts;

    const trailer1Arr = [];
    const trailer2Arr = [];
    const truckStatusArr = [];
    const DATA = {
      time: currentTime,
      date: fromState.currentDate,
      longitude: fromState.locationDetails.coords.longitude,
      latitude: fromState.locationDetails.coords.latitude,
      carrier: fromState.carrier,
      odometer: fromState.lastOdometer,
      truckImage: fromState.truckImage,
    };
    
    Object.keys(fromState.truckStatus).map((key) => truckStatusArr.push([key, fromState.truckStatus[key].status]));
    for (let i = 0; i < truckStatusArr.length; i += 1) {
      DATA[truckStatusArr[i][0]] = truckStatusArr[i][1];
    }
    
    if (fromState.trailer1.trailerNumber === null) {
      DATA['trailer1'] = null;
      DATA['trailer2'] = null;
      
    } else if (fromState.trailer1.trailerNumber !== null && fromState.trailer2.trailerNumber === null) {
      Object.keys(fromState.trailer1).map((key) => trailer1Arr.push([key, fromState.trailer1[key].status]));
      for (let i = 1; i < trailer1Arr.length; i += 1) {
        DATA[trailer1Arr[i][0]] = trailer1Arr[i][1];
      }
      DATA['trailer1'] = true;
      DATA['trailer1Number'] = fromState.trailer1.trailerNumber;
      DATA['trailer2'] = null;
      
    } else if (fromState.trailer1.trailerNumber !== null && fromState.trailer2.trailerNumber !== null) {
      Object.keys(fromState.trailer1).map((key) => trailer1Arr.push([key, fromState.trailer1[key].status]));
      for (let i = 1; i < trailer1Arr.length; i += 1) {
        DATA[trailer1Arr[i][0]] = trailer1Arr[i][1];
      }
      Object.keys(fromState.trailer2).map((key) => trailer2Arr.push([key, fromState.trailer2[key].status]));
      for (let i = 1; i < trailer2Arr.length; i += 1) {
        DATA[trailer2Arr[i][0]] = trailer2Arr[i][1];
      }
      DATA['trailer1'] = true;
      DATA['trailer2'] = true;
      DATA['trailer1Number'] = fromState.trailer1.trailerNumber;
      DATA['trailer2Number'] = fromState.trailer2.trailerNumber;
    }
    
    // For Android devices
    if (Platform.OS === 'android') {
      NetInfo.isConnected.fetch().then((isConnected) => {
        if (isConnected) {
          fatchDataToServer();
        } else {
          Alert.alert(
            'Oops Something went wrong',
            'Please Check Your Conection',
            [
              { text: 'Save Form Localy & Go To Start', style: 'destructive', onPress: SaveDataLocaly },
              { text: 'Try Again', style: 'destructive', onPress: submitForm },
            ]
          );
        }
      });
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener(
        'connectionChange',
        handleFirstConnectivityChange()
      );
    }
    //  iOS devices Check Connection
    const handleFirstConnectivityChange = (isConnected) => {
      NetInfo.isConnected.removeEventListener(
        'connectionChange',
        handleFirstConnectivityChange
      );

      if (!isConnected === false) {
        Alert.alert(
          'Oops Something went wrong',
          'Please Check Your Conection',
          [
            { text: 'Save Form Localy & Go To Start', style: 'destructive', onPress: SaveDataLocaly },
            { text: 'Try Again', style: 'destructive', onPress: submitForm },
          ]
        );
      } else {
        fatchDataToServer();
      }
    };

    const fatchDataToServer = async () => {
      const response = await fetch(`https://dvir-project-server.firebaseio.com/data.json?auth=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(DATA)
      });

      if (response.ok) {
        setLoading(false);
        const resetLocalData = [];
        try {
          await AsyncStorage.setItem('aocalDATA', JSON.stringify(resetLocalData));
        } catch (error) {
          alert('error');
        }
        Alert.alert('   the form has been sent successfully', '                           Drive carefuly!');
        navigation.navigate('Index');
      }
      if (response.status === 404) {

        Alert.alert(
          'Oops Something went wrong',
          [
            { text: 'Save Form Localy & Go To Start', style: 'destructive', onPress: SaveDataLocaly },
            { text: 'Try Again', style: 'destructive', onPress: submitForm },
          ]
        );

      }
    };

    const storeData = async (json) => {
      let tempLocalDATA = json;
      if (tempLocalDATA === null) {
        tempLocalDATA = [];
      }
      tempLocalDATA.push(DATA);
      try {
        await AsyncStorage.setItem('aocalDATA', JSON.stringify(tempLocalDATA));
        alert('saved');
      } catch (error) {
        alert('error');
      }
    };

    const retrieveData = async () => {
      AsyncStorage.getItem('aocalDATA')
        .then((req) => JSON.parse(req))
        .then((json) => storeData(json))
        .catch((error) => alert(error));
    };


    const SaveDataLocaly = async () => {
      await retrieveData();
      onSaveData(DATA);
      setLoading(false);
      navigation.navigate('Index');
    };

  };

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Pre-Trip</Text>
        {/* צריך להגדיר dvirstatus נעלאבוקקק  */}
        <FormIntroSection
          truckProperties={truckProperties}
          dvirStatus={false}
        />
        <Form />
        <FormSubmission
          clickedHandler={setClicked}
          clicked={clicked}
          modalshowHandler={setModalShow}
          checkboxVal={checkBoxValue}
          setCheckBoxHandler={setCheckBoxValue}
        />
        {modalShow && <Modal navigation={navigation} modalshowHandler={setModalShow} clean={cleanUpHandler} />}
        {trailerModal && <AddTrailerModal />}
        {loading && <SpinerModal />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 8,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  }
});

const mapStateToProps = (state) => {
  return {
    imageBase64: state.form.truckImage,
    trailerModal: state.appUI.trailerModalShow,
    fromState: state.form,
    token: state.auth.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveData: (DATA) => dispatch(setData(DATA))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DvirFormScreen);
