/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Colors/Colors';


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
  
  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Saved Reports</Text>
      </View>
      <Text style={styles.emptinessText}>Good! No Saved Reports</Text>
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
    height: '15%',
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