/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-else-return */
/* eslint-disable no-alert */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  Platform,
  NetInfo,
  Button,
  Alert
} from 'react-native';
import SpinerModal from '../components/UI/Spiner/SpinerModal';
import Colors from '../Colors/Colors';
import PreTripPage from '../components/UI/Modals/PreTripPage';

export const OldReportsTab = (props) => {
  const [allReportData, setAllReportData] = useState(false);
  const [userData, setUserData] = useState(false);
  const [company, setCompany] = useState(false);
  const [userForm, setUserForm] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('userCompany')
      .then((userCompany) => {
        const tempCompany = JSON.parse(userCompany);
        console.log(4);
        setCompany(tempCompany);
        AsyncStorage.getItem('userData')
          .then((user) => {
            const temp = JSON.parse(user);
        console.log(3);
        setUserData(temp);
          });
      });
  }, []);

  useEffect(() => {
    if (!allReportData && company && userData) {
      axios.get(`https://dvir-project-server.firebaseio.com/reports/-M-LnoFF1RuOGySki32y/${company}/.json?auth=${userData.token}`)
        .then((res) => {
          console.log(1);
          findUserForm(res.data);
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    }
  }, [allReportData, company, userData]);

  const findUserForm = (data) => {
    const truckKeys = Object.keys(data);
    const userUID = userData.userId;
    for (let i = 0; i < truckKeys.length; i += 1) {
      if (data[truckKeys[i]].OpenForm !== false && data[truckKeys[i]].OpenForm.userUID === userUID) {
        console.log(2);
        setUserForm(data[truckKeys[i]].OpenForm);
      }
    }
  };


  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>History</Text>
      </View>
      {userForm
        ? <ScrollView><PreTripPage data={userForm} /></ScrollView>
        : <Text style={styles.emptinessText}>There Is No Reports From You</Text>}
    </View>
  );
};
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const LocalyForms = (props) => {
  const [loading, setLoading] = useState(false);
  const [companyDataToServer, setCompanyDataToServer] = useState(false);
  const [userData, setUserData] = useState(false);
  const [company, setCompany] = useState(false);
  const [localData, setLocalData] = useState(false);
  const [block, setBlock] = useState(false);
  const [truckStatus, setTruckStatus] = useState(false);
  const [trailer1Status, setTrailer1Status] = useState(false);
  const [trailer2Status, setTrailer2Status] = useState(false);
  const [trailer1Validation, setTrailer1Validation] = useState(false);
  const [trailer2Validation, setTrailer2Validation] = useState(false);
  const [localAlert, setLocalAlert] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('userCompany')
      .then((userCompany) => {
        const tempCompany = JSON.parse(userCompany);
        setCompany(tempCompany);
        AsyncStorage.getItem('userData')
          .then((user) => {
            const temp = JSON.parse(user);
            setUserData(temp);
            AsyncStorage.getItem('aocalDATA')
              .then((req) => {
                const json = JSON.parse(req);
                if (json[0].userUID === temp.userId) {
                  setLocalData(json);
                  const trailersValidation = json[0];
                  setTrailer1Validation(trailersValidation.trailer1Number);
                  setTrailer2Validation(trailersValidation.trailer2Number);
                  AsyncStorage.getItem('aocalCOMPANY')
                    .then((companyData) => {
                      const compnyDataObj = JSON.parse(companyData);
                      setCompanyDataToServer(compnyDataObj);
                      AsyncStorage.getItem('SummryBlockAlert')
                        .then((SummryBlockAlert) => {
                          const SummryBlockAlertObj = JSON.parse(SummryBlockAlert);
                          setBlock(SummryBlockAlertObj.blockStatus);
                          setTrailer1Status(SummryBlockAlertObj.trailer1Status);
                          setTrailer2Status(SummryBlockAlertObj.trailer2Status);
                          setTruckStatus(SummryBlockAlertObj.truckStatus);
                          setLocalAlert(SummryBlockAlertObj.blockAlert);
                        })
                        .catch(() => null);
                    })
                    .catch(() => null);
                }
              })
              .catch(() => null);
          });
      });
  }, []);
  const deleteLocalForm = (index, uploadBool) => {
    const newData = localData;
    newData.splice(index, 1);
    try {
      AsyncStorage.setItem('aocalDATA', JSON.stringify(newData));
    } catch (error) {
      alert('error');
    }
    if (!uploadBool) {
      props.navigation.navigate('Index', { type: 'noLocalForm' });
    }
  };

  const uploadLocalForm = (index) => {
    const pervData = localData;
    const formToUpload = pervData.splice(index, 1);
    CheckConnectivity(formToUpload, index);
  };

  const CheckConnectivity = (dataToFatch, index) => {
    setLoading(true);
    // For Android devices
    if (Platform.OS === 'android') {
      NetInfo.isConnected.fetch().then((isConnected) => {
        if (isConnected) {
          fatchDataToServer(dataToFatch, index, trailer1Status, trailer2Status);
        } else {
          alert('No Internet Connection');
          setLoading(false);
        }
      });
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener(
        'connectionChange',
        handleFirstConnectivityChange(dataToFatch, index)
      );
    }
  };

  const handleFirstConnectivityChange = (isConnected, dataToFatch, index) => {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      handleFirstConnectivityChange
    );

    if (isConnected === false) {
      alert('You Are Offline! \n Please Check Your Connection');
    } else {
      fatchDataToServer(dataToFatch, index, trailer1Status, trailer2Status);
    }
  };

  const fatchDataToServer = (dataToFatchArr, index, trailerStatusData1, trailerStatusData2) => {
    //
    const dataToFatch = dataToFatchArr[0];
    if (company && userData) {
      axios.get(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${company}/.json?auth=${userData.token}`)
        .then((companyObjData) => {
          axios.get(`https://dvir-project-server.firebaseio.com/reports/-M-LnoFF1RuOGySki32y/${company}/.json?auth=${userData.token}`)
            .then((ReportTruckData) => {
              const localFormTruckNumber = dataToFatch.truckNumber;
              const truckReportDATA = ReportTruckData.data;
              if (block) {
                if (!dataToFatch.tripStatus) {
                  // preTrip block
                  companyDataToServer.drivers[userData.userId].tripStatus = false;
                  companyDataToServer.drivers[userData.userId].block = true;
                  companyDataToServer.drivers[userData.userId].bindTruck = false;
                  companyDataToServer.drivers[userData.userId].bindTrailer1 = false;
                  companyDataToServer.drivers[userData.userId].bindTrailer2 = false;
                  companyDataToServer.vehicle[localFormTruckNumber].onTrip = false;
                  companyDataToServer.vehicle[localFormTruckNumber].status = truckStatus;
                  if (dataToFatch.trailer1Number) {
                    companyDataToServer.trailers[dataToFatch.trailer1Number].onTrip = false;
                    companyDataToServer.trailers[dataToFatch.trailer1Number].status = {
                      brakeConnections: trailer1Status.brakeConnectionsTrailer1,
                      brakes: trailer1Status.brakesTrailer1,
                      couplingDevices: trailer1Status.couplingDevicesTrailer1,
                      couplingKingPin: trailer1Status.couplingKingPinTrailer1,
                      doors: trailer1Status.doorsTrailer1,
                      hitch: trailer1Status.hitchTrailer1,
                      landingGear: trailer1Status.landingGearTrailer1,
                      lights: trailer1Status.lightsTrailer1,
                      reflectors: trailer1Status.reflectorsTrailer1,
                      roof: trailer1Status.roofTrailer1,
                      suspensionSystem: trailer1Status.suspensionSystemTrailer1,
                      straps: trailer1Status.strapsTrailer1,
                      tarpulin: trailer1Status.tarpulinTrailer1,
                      tires: trailer1Status.tiresTrailer1,
                      wheelsAndRim: trailer1Status.wheelsAndRimTrailer1
                    };
                  }
                  if (dataToFatch.trailer2Number !== false) {
                    companyDataToServer.trailers[dataToFatch.trailer2Number].onTrip = false;
                    companyDataToServer.trailers[dataToFatch.trailer2Number].status = {
                      brakeConnections: trailer2Status.brakeConnectionsTrailer2,
                      brakes: trailer2Status.brakesTrailer2,
                      couplingDevices: trailer2Status.couplingDevicesTrailer2,
                      couplingKingPin: trailer2Status.couplingKingPinTrailer2,
                      doors: trailer2Status.doorsTrailer2,
                      hitch: trailer2Status.hitchTrailer2,
                      landingGear: trailer2Status.landingGearTrailer2,
                      lights: trailer2Status.lightsTrailer2,
                      reflectors: trailer2Status.reflectorsTrailer2,
                      roof: trailer2Status.roofTrailer2,
                      suspensionSystem: trailer2Status.suspensionSystemTrailer2,
                      straps: trailer2Status.strapsTrailer2,
                      tarpulin: trailer2Status.tarpulinTrailer2,
                      tires: trailer2Status.tiresTrailer2,
                      wheelsAndRim: trailer2Status.wheelsAndRimTrailer2
                    };
                  }
                  BlockUpload(companyDataToServer);
                } else {
                  // postTrip block
                  companyDataToServer.drivers[userData.userId].tripStatus = true;
                  companyDataToServer.drivers[userData.userId].block = true;
                  companyDataToServer.drivers[userData.userId].bindTruck = localFormTruckNumber;
                  companyDataToServer.drivers[userData.userId].bindTrailer1 = dataToFatch.trailer1Number;
                  companyDataToServer.drivers[userData.userId].bindTrailer2 = dataToFatch.trailer2Number;
                  companyDataToServer.vehicle[localFormTruckNumber].status = truckStatus;
                  companyDataToServer.vehicle[localFormTruckNumber].onTrip = true;
                  if (dataToFatch.trailer1Number !== false) {
                    companyDataToServer.trailers[dataToFatch.trailer1Number].status = {
                      brakeConnections: trailer1Status.brakeConnectionsTrailer1,
                      brakes: trailer1Status.brakesTrailer1,
                      couplingDevices: trailer1Status.couplingDevicesTrailer1,
                      couplingKingPin: trailer1Status.couplingKingPinTrailer1,
                      doors: trailer1Status.doorsTrailer1,
                      hitch: trailer1Status.hitchTrailer1,
                      landingGear: trailer1Status.landingGearTrailer1,
                      lights: trailer1Status.lightsTrailer1,
                      reflectors: trailer1Status.reflectorsTrailer1,
                      roof: trailer1Status.roofTrailer1,
                      suspensionSystem: trailer1Status.suspensionSystemTrailer1,
                      straps: trailer1Status.strapsTrailer1,
                      tarpulin: trailer1Status.tarpulinTrailer1,
                      tires: trailer1Status.tiresTrailer1,
                      wheelsAndRim: trailer1Status.wheelsAndRimTrailer1
                    };
                    companyDataToServer.trailers[dataToFatch.trailer1Number].onTrip = true;
                  }
                  if (dataToFatch.trailer2Number !== false) {
                    companyDataToServer.trailers[dataToFatch.trailer2Number].status = {
                      brakeConnections: trailer2Status.brakeConnectionsTrailer2,
                      brakes: trailer2Status.brakesTrailer2,
                      couplingDevices: trailer2Status.couplingDevicesTrailer2,
                      couplingKingPin: trailer2Status.couplingKingPinTrailer2,
                      doors: trailer2Status.doorsTrailer2,
                      hitch: trailer2Status.hitchTrailer2,
                      landingGear: trailer2Status.landingGearTrailer2,
                      lights: trailer2Status.lightsTrailer2,
                      reflectors: trailer2Status.reflectorsTrailer2,
                      roof: trailer2Status.roofTrailer2,
                      suspensionSystem: trailer2Status.suspensionSystemTrailer2,
                      straps: trailer2Status.strapsTrailer2,
                      tarpulin: trailer2Status.tarpulinTrailer2,
                      tires: trailer2Status.tiresTrailer2,
                      wheelsAndRim: trailer2Status.wheelsAndRimTrailer2
                    };
                    companyDataToServer.trailers[dataToFatch.trailer2Number].onTrip = true;
                  }
                  BlockUpload(companyDataToServer);
                }
              } else if (!block) {
                if (companyObjData.data.drivers[userData.userId].tripStatus === false && truckReportDATA[localFormTruckNumber].OpenForm === false) {
                  // pre Trip
                  const currentCompanyData = companyObjData.data;
                  const localCompanyData = companyDataToServer;
                  currentCompanyData.drivers[userData.userId] = localCompanyData.drivers[userData.userId];
                  currentCompanyData.vehicle[dataToFatch.truckNumber] = localCompanyData.vehicle[dataToFatch.truckNumber];
                  if (currentCompanyData.drivers[userData.userId].bindTrailer1 !== false) {
                    currentCompanyData.trailers[currentCompanyData.drivers[userData.userId].bindTrailer1] = localCompanyData.trailers[currentCompanyData.drivers[userData.userId].bindTrailer1];
                    if (currentCompanyData.drivers[userData.userId].bindTrailer2 !== false) {
                      currentCompanyData.trailers[currentCompanyData.drivers[userData.userId].bindTrailer2] = localCompanyData.trailers[currentCompanyData.drivers[userData.userId].bindTrailer2];
                    }
                  }
                  preTripUpload(dataToFatch, currentCompanyData, index, localAlert);
                } else if (companyObjData.data.drivers[userData.userId].tripStatus === true && truckReportDATA[localFormTruckNumber].OpenForm !== false) {
                  // post Trip
                  const lastPreTripObj = truckReportDATA[localFormTruckNumber].OpenForm;
                  const newCloseForms = updateCloseFormObjByDate(truckReportDATA[localFormTruckNumber]);
                  const truckData = truckReportDATA[localFormTruckNumber];
                  if (typeof truckReportDATA[localFormTruckNumber] === 'object') {
                    truckData.closeForms = newCloseForms;
                    truckData.OpenForm = false;
                    truckData.closeForms[new Date()] = {
                      preTripForm: lastPreTripObj,
                      postTripForm: dataToFatch[index]
                    };
                  }
                  const currentPostCompanyData = companyObjData.data;
                  const localCompanyData = companyDataToServer;
                  currentPostCompanyData.drivers[userData.userId] = localCompanyData.drivers[userData.userId];
                  currentPostCompanyData.vehicle[dataToFatch.truckNumber] = localCompanyData.vehicle[dataToFatch.truckNumber];
                  if (lastPreTripObj.trailer1Number !== false) {
                    currentPostCompanyData.trailers[lastPreTripObj.trailer1Number] = localCompanyData.trailers[lastPreTripObj.trailer1Number];
                    currentPostCompanyData.trailers[lastPreTripObj.trailer1Number].onTrip = false;
                    if (lastPreTripObj.trailer2Number !== false) {
                      currentPostCompanyData.trailers[lastPreTripObj.trailer2Number] = localCompanyData.trailers[lastPreTripObj.trailer2Number];
                      currentPostCompanyData.trailers[lastPreTripObj.trailer2Number].onTrip = false;
                    }
                  }
                  postTripUpload(truckData, currentPostCompanyData, localFormTruckNumber, dataToFatch, index, localAlert);
                } else {
                  Alert.alert(
                    'Oops Something went wrong',
                    'There is a problem with form reliability please fill in new form',
                    [
                      { text: 'Fill New Post-Trip Form', style: 'destructive', onPress: () => props.navigation.navigate('Index') },
                    ],
                  );
                }
              }
            })
            .catch(() => fatchFalseAlert(true, dataToFatch, index));
        })
        .catch(() => fatchFalseAlert(true, dataToFatch, index));
    }
  };

  const postTripUpload = (truckData, companyData, truckNumber, dataToFatch, index) => {
    // setModalShow(true);
    axios.put(`https://dvir-project-server.firebaseio.com/reports/-M-LnoFF1RuOGySki32y/${company}/${truckNumber}/.json?auth=${userData.token}`, truckData)
      .then(() => {
        axios.post(`https://dvir-project-server.firebaseio.com/Notifications/${company}/generalNotifications/.json?auth=${userData.token}`, localAlert)
          .then(() => {
            axios.put(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${company}/.json?auth=${userData.token}`, companyData)
              .then(() => {
                setLoading(false);
                AsyncStorage.setItem('aocalCOMPANY', JSON.stringify(resetLocalData));
                const resetLocalData = false;
                AsyncStorage.setItem('aocalDATA', JSON.stringify(resetLocalData));
                props.navigation.navigate('OldReportSum', {
                  trailer1Validation,
                  trailer2Validation,
                  truckStatus,
                  trailer1Status,
                  trailer2Status
                });
                deleteLocalForm(index, true);
              })
              .catch(() => fatchFalseAlert(true, dataToFatch, index));
          })
          .catch((err) => fatchFalseAlert(true, dataToFatch, index));
      })
      .catch(() => fatchFalseAlert(true, dataToFatch, index));
  };

  const fatchFalseAlert = (tripMode, data, indexx) => {
    if (tripMode) {
      // post trip mode
      Alert.alert(
        'Oops Something went wrong',
        'Form Not Upload',
        [
          { text: 'Fill New Post-Trip Form', style: 'destructive', onPress: () => props.navigation.navigate('SelectTruck') },
          { text: 'Try Again', style: 'destructive', onPress: () => CheckConnectivity(data, indexx) },
        ],
      );
    } else {
      // pre trip mode
      Alert.alert(
        'Oops Something went wrong',
        'Form Not Upload',
        [
          { text: 'Fill New Pre-Trip Form', style: 'destructive', onPress: () => props.navigation.navigate('SelectTruck') },
          { text: 'Try Again', style: 'destructive', onPress: () => CheckConnectivity(data, indexx) },
        ],
      );
    }
  };

  const updateCloseFormObjByDate = (allTruckReports) => {
    const truckOldData = allTruckReports.closeForms;
    if (allTruckReports) {
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

  const BlockUpload = (bigData) => {
    axios.post(`https://dvir-project-server.firebaseio.com/Notifications/${company}/impotentNotifications/.json?auth=${userData.token}`, localAlert)
      .then(() => {
        axios.put(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${company}/.json?auth=${userData.token}`, bigData)
          .then(() => {
            setLoading(false);
            setBlock(true);
            props.navigation.navigate('OldReportSum', {
              trailer1Validation,
              trailer2Validation,
              truckStatus,
              trailer1Status,
              trailer2Status
            });
            deleteLocalForm(0, true);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const preTripUpload = async (reports, currentCompanyData, dataToFatch, index) => {
    const response = await axios.put(`https://dvir-project-server.firebaseio.com/reports/-M-LnoFF1RuOGySki32y/${company}/${reports.truckNumber}/OpenForm/.json?auth=${userData.token}`, reports);
    if (response) {
      const resetLocalData = [];
      try {
        AsyncStorage.setItem('firstTimeUser', JSON.stringify(true));
        AsyncStorage.setItem('aocalDATA', JSON.stringify(resetLocalData));
        AsyncStorage.setItem('aocalCOMPANY', JSON.stringify(resetLocalData));
        AsyncStorage.setItem('lastReport', JSON.stringify(reports));
        axios.post(`https://dvir-project-server.firebaseio.com/Notifications/${company}/generalNotifications/.json?auth=${userData.token}`, localAlert)
          .then(() => {
            axios.put(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${company}/.json?auth=${userData.token}`, currentCompanyData)
              .then(() => {
                alert('form has been sent successfully');
                setLoading(false);
                props.navigation.navigate('OldReportSum', {
                  trailer1Validation,
                  trailer2Validation,
                  truckStatus,
                  trailer1Status,
                  trailer2Status
                });
                deleteLocalForm(index, true);
              })
              .catch(() => fatchFalseAlert(false, dataToFatch, index));
          })
          .catch(() => fatchFalseAlert(false, dataToFatch, index));
      } catch (error) {
        fatchFalseAlert(false, dataToFatch, index);
      }
    } else {
      fatchFalseAlert(false, dataToFatch, index);
    }
  };

  const formView = (
    <View>
      <Button title="Delete Form" onPress={() => deleteLocalForm(0)} />
      <Button title="Upload Form" onPress={() => uploadLocalForm(0)} />
      <PreTripPage data={localData[0]} />
    </View>
  );


  return (

    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Saved Reports</Text>
      </View>
      <ScrollView>
        {localData.length > 0
          ? formView
          : <Text style={styles.emptinessText}>Good! No Localy Reports</Text>}
      </ScrollView>
      {loading && <SpinerModal />}
    </View>
  );
};


const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  headerView: {
    height: 40,
    backgroundColor: Colors.primary,
    width: '100%',
  },
  emptinessText: {
    textAlign: 'center',
    marginTop: '60%',
    fontWeight: 'bold',
    fontSize: 25

  }
});


export default createBottomTabNavigator({

  Old_Reports: {
    screen: OldReportsTab,
    navigationOptions: {
      activeTintColor: Colors.primary,
      tabBarLabel: 'Old Reports',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-cloud-done" color={tintColor} size={30} />
      ),
      tabBarOptions: { activeTintColor: Colors.primary, inactiveTintColor: Colors.accent, }
    }
  },


  Local_Form_Save: {
    screen: LocalyForms,
    navigationOptions: {
      activeTintColor: Colors.primary,
      tabBarLabel: 'Local Saved Forms',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-save" color={tintColor} size={30} />
      ),
      tabBarOptions: { activeTintColor: Colors.primary, inactiveTintColor: Colors.accent, }
    }
  },

});
