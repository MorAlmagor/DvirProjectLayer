/* eslint-disable no-alert */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  Platform,
  NetInfo
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Colors/Colors';
import OldReports from '../components/UI/MapReturnSection/OldReports';
// import { setSavedFormBool } from '../store/actions/appUiActions';
// להוסיף מחיקה דרך הרידקס בקומנת ולחבר לרידדקס סטאק נביגגיטור
export const OldReportsTab = ({ navigation }) => {
  //
  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Old Reports</Text>
      </View>
      <Text style={styles.emptinessText}>There Is No Reports From You</Text>
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
