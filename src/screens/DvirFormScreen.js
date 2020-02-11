/* eslint-disable no-else-return */
/* eslint-disable semi */
/* eslint-disable no-alert */
/* eslint-disable padded-blocks */
/* eslint-disable dot-notation */
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-template */
import React, { useState } from 'react';
import axios from 'axios';
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
import { connect } from 'react-redux';
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
  token,
  truckNum,
  userUID,
  userCompany,
  tripStatus,
  trailersData,
  companyObj,
  postTripMode,
  lastPreTripObj,
  // ///////////
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const cleanUpHandler = () => {
    setModalShow(false);
    setCheckBoxValue(false);
    setClicked(false);
    // לסדר קלין אפ אחרי שליחה לא גמור בעליל פאק מי לייף!
    navigation.navigate('Index', { type: 'lockApp' });
  };

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
      tripStatus,
      company: userCompany,
      userUID,
      time: currentTime,
      date: fromState.currentDate,
      longitude: fromState.locationDetails.coords.longitude,
      latitude: fromState.locationDetails.coords.latitude,
      truckNumber: truckNum,
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
    // /////////////////////////////////////////////////////// end form data to post - reports ///////////////////////////////////////////////////////////////////////////////////////////////////////////


    // /////////////////////////////////////////////////////// start update status - company data ////////////////////////////////////////////////////////////////////////////////////////////////////////

    // update companyObj
    const bigData = companyObj;
    const statusSwitch = bigData.drivers[userUID].tripStatus;

    // // driver update onTrip Status //
    bigData.drivers[userUID].tripStatus = !statusSwitch;
    if (postTripMode) {
      bigData.drivers[userUID]['bindTruck'] = false;
      bigData.drivers[userUID]['bindTrailer1'] = false;
      bigData.drivers[userUID]['bindTrailer2'] = false;
    } else {
      bigData.drivers[userUID]['bindTruck'] = truckNum;
      bigData.drivers[userUID]['bindTrailer1'] = fromState.trailer1.trailerNumber;
      bigData.drivers[userUID]['bindTrailer2'] = fromState.trailer2.trailerNumber;
    }

    // Trucks //
    bigData.vehicle[truckNum] = {
      ...bigData.vehicle[truckNum],
      addomer: fromState.lastOdometer,
      onTrip: !statusSwitch,
      status: fromState.truckStatus,
    };
    // // trailers //
    const trailersDataToServer = trailersData;
    const trailer1Num = fromState.trailer1.trailerNumber
    const trailer2Num = fromState.trailer2.trailerNumber
    if (trailer1Num && !trailer2Num) {
      trailersDataToServer[trailer1Num] = {
        onTrip: !statusSwitch,
        status: {
          brakeConnections: fromState.trailer1.brakeConnectionsTrailer1,
          brakes: fromState.trailer1.brakesTrailer1,
          couplingDevices: fromState.trailer1.couplingDevicesTrailer1,
          couplingKingPin: fromState.trailer1.couplingKingPinTrailer1,
          doors: fromState.trailer1.doorsTrailer1,
          hitch: fromState.trailer1.hitchTrailer1,
          landingGear: fromState.trailer1.landingGearTrailer1,
          lights: fromState.trailer1.lightsTrailer1,
          reflectors: fromState.trailer1.reflectorsTrailer1,
          roof: fromState.trailer1.roofTrailer1,
          suspensionSystem: fromState.trailer1.suspensionSystemTrailer1,
          straps: fromState.trailer1.strapsTrailer1,
          tarpulin: fromState.trailer1.tarpulinTrailer1,
          tires: fromState.trailer1.tiresTrailer1,
          wheelsAndRim: fromState.trailer1.wheelsAndRimTrailer1
        },
        trailerID: trailersDataToServer[trailer1Num].trailerID,
        trailerNumber: trailersDataToServer[trailer1Num].trailerNumber
      };
    } else if (trailer1Num && trailer2Num) {
      trailersDataToServer[trailer1Num] = {
        onTrip: !statusSwitch,
        status: {
          brakeConnections: fromState.trailer1.brakeConnectionsTrailer1,
          brakes: fromState.trailer1.brakesTrailer1,
          couplingDevices: fromState.trailer1.couplingDevicesTrailer1,
          couplingKingPin: fromState.trailer1.couplingKingPinTrailer1,
          doors: fromState.trailer1.doorsTrailer1,
          hitch: fromState.trailer1.hitchTrailer1,
          landingGear: fromState.trailer1.landingGearTrailer1,
          lights: fromState.trailer1.lightsTrailer1,
          reflectors: fromState.trailer1.reflectorsTrailer1,
          roof: fromState.trailer1.roofTrailer1,
          suspensionSystem: fromState.trailer1.suspensionSystemTrailer1,
          straps: fromState.trailer1.strapsTrailer1,
          tarpulin: fromState.trailer1.tarpulinTrailer1,
          tires: fromState.trailer1.tiresTrailer1,
          wheelsAndRim: fromState.trailer1.wheelsAndRimTrailer1
        },
        trailerID: trailersDataToServer[trailer1Num].trailerID,
        trailerNumber: trailersDataToServer[trailer1Num].trailerNumber
      };
      trailersDataToServer[trailer2Num] = {
        onTrip: !statusSwitch,
        status: {
          brakeConnections: fromState.trailer2.brakeConnectionsTrailer2,
          brakes: fromState.trailer2.brakesTrailer2,
          couplingDevices: fromState.trailer2.couplingDevicesTrailer2,
          couplingKingPin: fromState.trailer2.couplingKingPinTrailer2,
          doors: fromState.trailer2.doorsTrailer2,
          hitch: fromState.trailer2.hitchTrailer2,
          landingGear: fromState.trailer2.landingGearTrailer2,
          lights: fromState.trailer2.lightsTrailer2,
          reflectors: fromState.trailer2.reflectorsTrailer2,
          roof: fromState.trailer2.roofTrailer2,
          suspensionSystem: fromState.trailer2.suspensionSystemTrailer2,
          straps: fromState.trailer2.strapsTrailer2,
          tarpulin: fromState.trailer2.tarpulinTrailer2,
          tires: fromState.trailer2.tiresTrailer2,
          wheelsAndRim: fromState.trailer2.wheelsAndRimTrailer2
        },
        trailerID: trailersDataToServer[trailer2Num].trailerID,
        trailerNumber: trailersDataToServer[trailer2Num].trailerNumber
      };
    }
    bigData.trailers = trailersDataToServer;
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
              { text: 'Save Form Localy & Go To Start', style: 'destructive', onPress: SaveDataLocaly(bigData) },
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
            { text: 'Save Form Localy & Go To Start', style: 'destructive', onPress: SaveDataLocaly(bigData) },
            { text: 'Try Again', style: 'destructive', onPress: submitForm },
          ]
        );
      } else {
        fatchDataToServer();
      }
    };

    const updateCloseFormObjByDate = () => {
      const truckOldData = lastPreTripObj.closeForms;
      if (truckOldData) {
        const keysArr = Object.keys(truckOldData);
        const day180 = 86400000 * 180;
        const current = new Date();
        const sixMounthAgoDate = new Date(current.getTime() - day180);
        const UpdateKeys = [];
        for (let i = 0; i < keysArr.length; i += 1) {
          if (keysArr[i] !== 'doNotDelete') {
            const tempSavedDate = new Date(keysArr[i]);
            if (sixMounthAgoDate > tempSavedDate) {
              UpdateKeys.push(keysArr[i]);
            }
          }
        }
        for (let j = 0; j < UpdateKeys.length; j += 1) {
          delete truckOldData[UpdateKeys[j]];
        }
      }
      return truckOldData;
    };

    const fatchDataToServer = async () => {

      if (postTripMode) {
        const truckReportData = lastPreTripObj;
        const newCloseForm = updateCloseFormObjByDate();
        truckReportData.closeForms = newCloseForm

        const openForm = truckReportData.OpenForm;
        if (typeof truckReportData === 'object') {
          truckReportData.OpenForm = false;
          truckReportData.closeForms[date] = {
            preTripForm: openForm,
            postTripForm: DATA
          }
          axios.put(`https://dvir-project-server.firebaseio.com/reports/-M-LnoFF1RuOGySki32y/${userCompany}/${truckNum}/.json?auth=${token}`, truckReportData)
            .then(() => {
              axios.put(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${userCompany}/.json?auth=${token}`, bigData)
                .then(() => {
                  setLoading(false);
                  setModalShow(true);
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        }

      } else {
        const response = await axios.put(`https://dvir-project-server.firebaseio.com/reports/-M-LnoFF1RuOGySki32y/${userCompany}/${truckNum}/OpenForm/.json?auth=${token}`, DATA);
        if (response) {
          // setLoading(false);
          const resetLocalData = [];
          try {
            AsyncStorage.setItem('firstTimeUser', JSON.stringify(true));
            AsyncStorage.setItem('aocalDATA', JSON.stringify(resetLocalData));
            AsyncStorage.setItem('aocalCOMPANY', JSON.stringify(resetLocalData));
            AsyncStorage.setItem('lastReport', JSON.stringify(DATA));
            //
            axios.put(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${userCompany}/.json?auth=${token}`, bigData)
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          } catch (error) {
            alert('error');
          }
          Alert.alert(' form has been sent successfully');
          setLoading(false);
          setModalShow(true);
        } else {
          Alert.alert(
            'Oops Something went wrong',
            [
              { text: 'Save Form Localy & Go To Start', style: 'destructive', onPress: SaveDataLocaly(bigData) },
              { text: 'Try Again', style: 'destructive', onPress: submitForm },
            ]
          );
        }
      }
    };

    const storeData = (json) => {
      let tempLocalDATA = json;
      if (tempLocalDATA === null) {
        tempLocalDATA = [];
      }
      tempLocalDATA.push(DATA);
      try {
        AsyncStorage.setItem('aocalDATA', JSON.stringify(tempLocalDATA));
        alert('saved');
      } catch (error) {
        alert('error');
      }
    };

    const retrieveData = () => {
      AsyncStorage.getItem('aocalDATA')
        .then((req) => JSON.parse(req))
        .then((json) => storeData(json))
        .catch((error) => alert(error));
    };

    const retrieveCompanyUpdateServerData = () => {
      AsyncStorage.getItem('aocalCOMPANY')
        .then((req) => JSON.parse(req))
        .then((json) => storeData(json))
        .catch((error) => alert(error));
    };


    const SaveDataLocaly = (companysCurrentObj) => {
      retrieveData();
      retrieveCompanyUpdateServerData(companysCurrentObj)
      onSaveData(DATA);
      setLoading(false);
      navigation.navigate('Index');
    };
  };

  if (modalShow) {
    return (
      <Modal navigation={navigation} modalshowHandler={setModalShow} clean={cleanUpHandler} />
    )
  } else {
    console.log(!tripStatus)
    return (
      <ScrollView>
        <View>
          {tripStatus
            ? <Text style={styles.title}>Post-Trip</Text>
            : <Text style={styles.title}>Pre-Trip</Text>}
          <FormIntroSection
            truckProperties={truckProperties}
            dvirStatus={false}
          />
          <Form navigation={navigation} />
          <FormSubmission
            clickedHandler={setClicked}
            clicked={clicked}
            modalshowHandler={setModalShow}
            checkboxVal={checkBoxValue}
            setCheckBoxHandler={setCheckBoxValue}
            submitFNC={submitForm}
          />
          {trailerModal && <AddTrailerModal />}
          {loading && <SpinerModal />}
        </View>
      </ScrollView>
    );
  }
};

DvirFormScreen.navigationOptions = (modalShow) => {
  if (modalShow) {
    return {
      header: null
    };
  } else {
    return {

    };
  }
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
    fromState: state.form,
    truckNum: state.form.truckNumber,
    trailerModal: state.appUI.trailerModalShow,
    token: state.auth.token,
    userUID: state.auth.userId,
    userCompany: state.form.carrier,
    tripStatus: state.user.tripStatus,
    truckListData: state.trucks.trucks,
    trailersData: state.trailers.trailers,
    companyObj: state.company.companyData,
    postTripMode: state.appUI.postTripMode,
    lastPreTripObj: state.report.lastReport
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveData: (DATA) => dispatch(setData(DATA))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DvirFormScreen);
