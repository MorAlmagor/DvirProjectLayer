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
} from 'react-native';
import Colors from '../Colors/Colors';
import OldReports from '../components/UI/MapReturnSection/OldReports';
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
        setAllReportData(res.data);
        findUserForm(res.data);
      })
      .catch((err) => console.log(err));
  }

  const findUserForm = (data) => {
    const truckKeys = Object.keys(data);
    const userUID = userData.userId;
    for (let i = 0; i < truckKeys.length; i += 1) {
      if (data[truckKeys[i]].OpenForm !== false) {
        if (data[truckKeys[i]].OpenForm.userUID === userUID) {
          setUserForm(data[truckKeys[i]].OpenForm);
        }
      }
    }
  };
  
  
  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>History</Text>
      </View>
      { userForm
        ? <PreTripPage data={userForm} />
        : <Text style={styles.emptinessText}>There Is No Reports From You</Text>}
    </View>
  );
};

export const LocalyForms = ({ navigation }) => {
  //
  const [localData, setLocalData] = useState(false);

  const loadLocalData = () => {
    AsyncStorage.getItem('aocalDATA')
      .then((req) => {
        const json = JSON.parse(req);
        setLocalData(json);
      })
      .catch(() => alert('error!'));
  };

  useEffect(() => {
    loadLocalData();
  }, []);

  const deleteLocalForm = async (index) => {
    const newData = localData;
    newData.splice(index, 1);
    try {
      await AsyncStorage.setItem('aocalDATA', JSON.stringify(newData));
      loadLocalData();
    } catch (error) {
      alert('error');
    }
  };

  const uploadLocalForm = (index) => {
    const pervData = localData;
    const formToUpload = pervData.splice(index, 1);
    CheckConnectivity(formToUpload, index);
  };

  const CheckConnectivity = (dataToFatch, index) => {
    // For Android devices
    if (Platform.OS === 'android') {
      NetInfo.isConnected.fetch().then((isConnected) => {
        if (isConnected) {
          fatchDataToServer(dataToFatch, index);
        } else {
          alert('No Internet Connection');
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
    const response = await fetch('https://dvir-project-server.firebaseio.com/data.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToFatch)
    });

    if (response.ok) {
      // setLoading(false);
      alert('the form has been sent successfully');
      deleteLocalForm(index);
    }
    if (response.status === 404) {
      alert('Oops Something went wrong');
    }
  };

  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Saved Reports</Text>
      </View>
      <ScrollView>
        {localData.length > 0
          // eslint-disable-next-line max-len
          ? localData.map((data, index) => <OldReports key={data.time} deleteForm={deleteLocalForm} uploadForm={uploadLocalForm} data={data} index={index} />)
          : <Text style={styles.emptinessText}>Good! No Localy Reports</Text>}
      </ScrollView>
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

const mapStateToProps = (state) => {
  return {
    truckNum: state.form.truckNumber,
    token: state.auth.token,
    userCompany: state.form.carrier,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(createBottomTabNavigator({

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

}));
