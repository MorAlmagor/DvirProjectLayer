/* eslint-disable prefer-const */
/* eslint-disable no-console */
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
  truckStatus,
  trailer1Valid,
  trailer2Valid,
  trailer1Status,
  trailer2Status,
  truckRaf,
  trailerRaf,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [block, setBlock] = useState(false);
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const cleanUpHandler = () => {
    setModalShow(false);
    setCheckBoxValue(false);
    setClicked(false);
    if (block) {
      navigation.navigate('Index', { type: 'block' });
    } else {
      navigation.navigate('Index', { type: 'lockApp' });
    }

  };

  const submitForm = () => {
    console.log('sumbit')
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
    bigData.drivers[userUID].block = false;
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
          fatchDataToServer(false);
        } else {
          Alert.alert(
            'Oops Something went wrong',
            'Please Check Your Conection',
            [
              { text: 'Save Form Localy & Go To Start', style: 'destructive', onPress: () => fatchDataToServer(true) },
              { text: 'Try Again', style: 'destructive', onPress: () => submitForm() },
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
            { text: 'Save Form Localy & Go To Start', style: 'destructive', onPress: () => fatchDataToServer(true) },
            { text: 'Try Again', style: 'destructive', onPress: () => submitForm() },
          ]
        );
      } else {
        fatchDataToServer(false);
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

    const fatchDataToServer = async (switchLocalSave) => {
      console.log('fatchDataToServer')
      console.log('fatchDataToServer switch : ' + switchLocalSave)
      const getSummery = (tempData, type) => {
        const tempDataArreyKeys = Object.keys(tempData);
        const tempFaults = [];
        let tempScore = 0;
        for (let i = 1; i < tempDataArreyKeys.length; i += 1) {
          if (tempData[tempDataArreyKeys[i]].status === false) {
            tempFaults.push(tempData[tempDataArreyKeys[i]].keyId);
            tempScore += tempData[tempDataArreyKeys[i]].Score;
          }
        }
        if (type) {
          const ans = {
            faultsArr: tempFaults,
            score: tempScore,
          };
          return ans;
        } else {
          const ans = {
            faultsArr: tempFaults,
            score: tempScore,
          };
          return ans;
        }
      };

      const truckSummery = getSummery(truckStatus, true);
      const tariler1Summery = getSummery(trailer1Status, true);
      const tariler2Summery = getSummery(trailer2Status, true);
      const TruckDetail = truckRaf > truckSummery.score;
      const Trailer1Detail = trailerRaf > tariler1Summery.score;
      const Trailer2Detail = trailerRaf > tariler2Summery.score;
      let blockBool = TruckDetail && Trailer1Detail && Trailer2Detail;
      blockBool = !blockBool
      let alertToServer;

      if (TruckDetail && Trailer1Detail && Trailer2Detail) {
        if (postTripMode) {
          // postTrip ok
          alertToServer = {
            type: 'END_TRIP',
            FaultsData: {
              truckSummery,
              tariler1Summery,
              tariler2Summery
            },
            data: DATA,
            userUID
          }
          const summeryData = {
            truckStatus,
            blockBool,
            alertToServer
          };
          if (switchLocalSave) {
            // post Trip ok local save
            SaveDataLocaly(bigData, summeryData, false, alertToServer)
          } else {
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
                      axios.post(`https://dvir-project-server.firebaseio.com/Notifications/${userCompany}/generalNotifications/.json?auth=${token}`, alertToServer)
                        .then(() => {
                          setLoading(false);
                          setModalShow(true);
                          const resetLocalData = false;
                          AsyncStorage.setItem('firstTimeUser', JSON.stringify(true));
                          AsyncStorage.setItem('aocalDATA', JSON.stringify(resetLocalData));
                          AsyncStorage.setItem('aocalCOMPANY', JSON.stringify(resetLocalData));
                          AsyncStorage.setItem('lastReport', JSON.stringify(DATA));
                        })
                        .catch((err) => console.log(err));
                    })
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
            }
          }
        } else {
          // preTrip ok
          alertToServer = {
            type: 'START_TRIP',
            FaultsData: {
              truckSummery,
              tariler1Summery,
              tariler2Summery
            },
            data: DATA,
            userUID
          }
          const summeryData = {
            truckStatus,
            blockBool,
            alertToServer
          };
          if (switchLocalSave) {
            SaveDataLocaly(bigData, summeryData, false, alertToServer)
          } else {
            const response = await axios.put(`https://dvir-project-server.firebaseio.com/reports/-M-LnoFF1RuOGySki32y/${userCompany}/${truckNum}/OpenForm/.json?auth=${token}`, DATA);
            if (response) {
              const resetLocalData = false;
              try {
                AsyncStorage.setItem('firstTimeUser', JSON.stringify(true));
                AsyncStorage.setItem('aocalDATA', JSON.stringify(resetLocalData));
                AsyncStorage.setItem('aocalCOMPANY', JSON.stringify(resetLocalData));
                AsyncStorage.setItem('lastReport', JSON.stringify(DATA));
                axios.put(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${userCompany}/.json?auth=${token}`, bigData)
                  .then(() => {
                    axios.post(`https://dvir-project-server.firebaseio.com/Notifications/${userCompany}/generalNotifications/.json?auth=${token}`, alertToServer)
                      .then(() => {
                      })
                      .catch((err) => console.log(err));
                  })
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
                  { text: 'Save Form Localy & Go To Start', style: 'destructive', onPress: () => SaveDataLocaly(bigData, summeryData, false, alertToServer) },
                  { text: 'Try Again', style: 'destructive', onPress: () => submitForm() },
                ]
              );
            }
          }
        }
      } else {
        // ////////////////////////////////////// fuck my life ////////////////////////////////////////////////////////////////
        // חסר עדכון מצב טריילרים
        alertToServer = {
          type: 'TOTALOS',
          FaultsData: {
            truckSummery,
            tariler1Summery,
            tariler2Summery
          },
          data: DATA,
          date: new Date(),
          tripPosition: tripStatus,
          userUID
        }
        bigData.drivers[userUID].block = true
        bigData.drivers[userUID].tripStatus = tripStatus
        if (!tripStatus) {
          // pretrip block
          bigData.drivers[userUID].bindTruck = false;
          bigData.drivers[userUID].bindTrailer1 = false;
          bigData.drivers[userUID].bindTrailer2 = false;
          bigData.vehicle[truckNum].onTrip = false;
          if (trailer1Valid !== false) {
            bigData.trailers[trailer1Valid].onTrip = false;
          }
          if (trailer2Valid !== false) {
            bigData.trailers[trailer2Valid].onTrip = false;
          }
        } else {
          // postTrip block
          bigData.drivers[userUID].bindTruck = truckNum;
          bigData.drivers[userUID].bindTrailer1 = trailer1Valid;
          bigData.drivers[userUID].bindTrailer2 = trailer2Valid;
          bigData.vehicle[truckNum].onTrip = true;
          if (trailer1Valid !== false) {
            bigData.trailers[trailer1Valid].onTrip = true;
          }
          if (trailer2Valid !== false) {
            bigData.trailers[trailer2Valid].onTrip = true;
          }
        }
        if (switchLocalSave) {
          const summeryData = {
            truckStatus,
            blockBool,
            alertToServer
          }
          SaveDataLocaly(bigData, summeryData, true, alertToServer)
        } else {
          axios.post(`https://dvir-project-server.firebaseio.com/Notifications/${userCompany}/impotentNotifications/.json?auth=${token}`, alertToServer)
            .then(() => {
              axios.put(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${userCompany}/.json?auth=${token}`, bigData)
                .then(() => {
                  setLoading(false);
                  setModalShow(true);
                  setBlock(true);
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        }
      }
    };

    const SaveDataLocaly = (bigDatalocal, summeryData, blockStatus, blockAlert) => {
      const tempLocalDATA = [DATA]
      AsyncStorage.setItem('aocalDATA', JSON.stringify(tempLocalDATA));
      AsyncStorage.setItem('aocalCOMPANY', JSON.stringify(bigDatalocal))
      const sumDataBlock = {
        summeryData,
        blockStatus,
        blockAlert,
        truckStatus,
        trailer1Status,
        trailer2Status
      };
      AsyncStorage.setItem('SummryBlockAlert', JSON.stringify(sumDataBlock))
      onSaveData(DATA);
      setLoading(false);
      alert('The form has been successfully saved');
      navigation.navigate('Index');
    };
  };

  if (modalShow) {
    return (
      <Modal navigation={navigation} modalshowHandler={setModalShow} clean={cleanUpHandler} userBlock={block} />
    )
  } else {
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
    lastPreTripObj: state.report.lastReport,

    truckStatus: state.form.truckStatus,
    trailer1Valid: state.form.trailer1.trailerNumber,
    trailer2Valid: state.form.trailer2.trailerNumber,
    trailer1Status: state.form.trailer1,
    trailer2Status: state.form.trailer2,
    truckRaf: state.appUI.truckRaf,
    trailerRaf: state.appUI.trailerRaf,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveData: (DATA) => dispatch(setData(DATA))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DvirFormScreen);