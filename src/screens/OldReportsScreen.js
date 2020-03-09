/* eslint-disable max-len */
/* eslint-disable no-else-return */
/* eslint-disable no-alert */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
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
import OldReports from '../components/UI/MapReturnSection/OldReports';
import PreTripPage from '../components/UI/Modals/PreTripPage';
import { setPostTripMode } from '../store/actions/appUiActions';

export const OldReportsTab = (props) => {
  const [allReportData, setAllReportData] = useState(false);
  const [userData, setUserData] = useState(false);
  const [company, setCompany] = useState(false);
  const [userForm, setUserForm] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('userCompany')
      .then((userCompany) => {
        const tempCompany = JSON.parse(userCompany);
        setCompany(tempCompany);
        AsyncStorage.getItem('userData')
          .then((user) => {
            const temp = JSON.parse(user);
            setUserData(temp);
          });
      });
  }, []);


  if (!allReportData && company && userData) {
    axios.get(`https://dvir-project-server.firebaseio.com/reports/-M-LnoFF1RuOGySki32y/${company}/.json?auth=${userData.token}`)
      .then((res) => {
        findUserForm(res.data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }

  const findUserForm = (data) => {
    const truckKeys = Object.keys(data);
    const userUID = userData.userId;
    for (let i = 0; i < truckKeys.length; i += 1) {
      if (data[truckKeys[i]].OpenForm !== false && data[truckKeys[i]].OpenForm.userUID === userUID) {
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
                  AsyncStorage.getItem('aocalCOMPANY')
                    .then((companyData) => {
                      const compnyDataObj = JSON.parse(companyData);
                      setCompanyDataToServer(compnyDataObj);
                    })
                    .catch(() => null);
                }
              })
              .catch(() => null);
          });
      });
  }, []);
  const deleteLocalForm = (index) => {
    const newData = localData;
    newData.splice(index, 1);
    try {
      AsyncStorage.setItem('aocalDATA', JSON.stringify(newData));
    } catch (error) {
      alert('error');
    }
    props.navigation.navigate('Index', { type: 'noLocalForm' });
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
          fatchDataToServer(dataToFatch, index);
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
      fatchDataToServer(dataToFatch, index);
    }
  };

  const fatchDataToServer = async (dataToFatch, index) => {
    if (company && userData) {
      axios.get(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${company}/.json?auth=${userData.token}`)
        .then((companyObjData) => {
          axios.get(`https://dvir-project-server.firebaseio.com/reports/-M-LnoFF1RuOGySki32y/${company}/.json?auth=${userData.token}`)
            .then((ReportTruckData) => {
              const localFormTruckNumber = dataToFatch[index].truckNumber;
              const truckReportDATA = ReportTruckData.data;
              const truckReportDATAkeys = Object.keys(truckReportDATA);
              if (companyObjData.data.drivers[userData.userId].tripStatus === false && truckReportDATA[localFormTruckNumber].OpenForm === false) {
                const currentCompanyData = companyObjData.data;
                const localCompanyData = companyDataToServer;
                currentCompanyData.drivers[userData.userId] = localCompanyData.drivers[userData.userId];
                currentCompanyData.vehicle[dataToFatch[index].truckNumber] = localCompanyData.vehicle[dataToFatch[index].truckNumber];
                if (currentCompanyData.drivers[userData.userId].bindTrailer1 !== false) {
                  currentCompanyData.trailers[currentCompanyData.drivers[userData.userId].bindTrailer1] = localCompanyData.trailers[currentCompanyData.drivers[userData.userId].bindTrailer1];
                  if (currentCompanyData.drivers[userData.userId].bindTrailer2 !== false) {
                    currentCompanyData.trailers[currentCompanyData.drivers[userData.userId].bindTrailer2] = localCompanyData.trailers[currentCompanyData.drivers[userData.userId].bindTrailer2];
                  }
                }
                preTripUpload(dataToFatch[index], currentCompanyData, dataToFatch, index);
              } else if (companyObjData.data.drivers[userData.userId].tripStatus === true && truckReportDATA[localFormTruckNumber].OpenForm !== false) {
                // ////////////// report obj ////////////////
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
                // ////////////// company obj ///////////////
                const currentPostCompanyData = companyObjData.data;
                const localCompanyData = companyDataToServer;
                currentPostCompanyData.drivers[userData.userId] = localCompanyData.drivers[userData.userId];
                currentPostCompanyData.vehicle[dataToFatch[index].truckNumber] = localCompanyData.vehicle[dataToFatch[index].truckNumber];
                if (currentPostCompanyData.drivers[userData.userId].bindTrailer1 !== false) {
                  currentPostCompanyData.trailers[currentPostCompanyData.drivers[userData.userId].bindTrailer1] = localCompanyData.trailers[currentPostCompanyData.drivers[userData.userId].bindTrailer1];
                  if (currentPostCompanyData.drivers[userData.userId].bindTrailer2 !== false) {
                    currentPostCompanyData.trailers[currentPostCompanyData.drivers[userData.userId].bindTrailer2] = localCompanyData.trailers[currentPostCompanyData.drivers[userData.userId].bindTrailer2];
                  }
                }
                postTripUpload(truckData, currentPostCompanyData, localFormTruckNumber, dataToFatch, index);
              } else {
                Alert.alert(
                  'Oops Something went wrong',
                  'There is a problem with form reliability please fill in new form',
                  [
                    { text: 'Fill New Post-Trip Form', style: 'destructive', onPress: () => props.navigation.navigate('Index') },
                  ],
                );
              }
            })
            .catch(() => fatchFalseAlert(true, dataToFatch, index));
        })
        .catch(() => fatchFalseAlert(true, dataToFatch, index));
    }
  };

  const postTripUpload = async (truckData, companyData, truckNumber, dataToFatch, index) => {
    axios.put(`https://dvir-project-server.firebaseio.com/reports/-M-LnoFF1RuOGySki32y/${company}/${truckNumber}/.json?auth=${userData.token}`, truckData)
      .then(() => {
        axios.put(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${company}/.json?auth=${userData.token}`, companyData)
          .then(() => {
            alert(' form has been sent successfully');
            setLoading(false);
            deleteLocalForm(index);
            const resetLocalData = false;
            AsyncStorage.setItem('aocalDATA', JSON.stringify(resetLocalData));
            AsyncStorage.setItem('aocalCOMPANY', JSON.stringify(resetLocalData));
            props.navigation.navigate('Index', { type: 'lockApp' });
          })
          .catch(() => fatchFalseAlert(true, dataToFatch, index));
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
          { text: 'Fill New Post-Trip Form', style: 'destructive', onPress: () => props.navigation.navigate('Dvir') },
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

  const preTripUpload = async (reports, currentCompanyData, dataToFatch, index) => {
    const response = await axios.put(`https://dvir-project-server.firebaseio.com/reports/-M-LnoFF1RuOGySki32y/${company}/${reports.truckNumber}/OpenForm/.json?auth=${userData.token}`, reports);
    if (response) {
      const resetLocalData = [];
      try {
        AsyncStorage.setItem('firstTimeUser', JSON.stringify(true));
        AsyncStorage.setItem('aocalDATA', JSON.stringify(resetLocalData));
        AsyncStorage.setItem('aocalCOMPANY', JSON.stringify(resetLocalData));
        AsyncStorage.setItem('lastReport', JSON.stringify(reports));

        axios.put(`https://dvir-project-server.firebaseio.com/companysData/-M-0ven_8goSu7kFGM-H/${company}/.json?auth=${userData.token}`, currentCompanyData)
          .then(() => {
            alert(' form has been sent successfully');
            setLoading(false);
            deleteLocalForm(index);
            props.navigation.navigate('Index', { type: 'lockApp' });
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
