/* eslint-disable no-else-return */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  AsyncStorage,
  Button,
  TouchableOpacity
} from 'react-native';
import Colors from '../../../Colors/Colors';
import PreTripPage from '../Modals/PreTripPage';

const OldReports = ({
  data,
  index,
  uploadForm,
  deleteForm
}) => {
  const [preViewBool, setPreViewBool] = useState(false);
  if (preViewBool) {
    return (
      <View>
        <Button title="Go Back" onPress={() => setPreViewBool(true)} />
        <Button title="Upaload Form" />
        <Button title="Delete form" />
        <PreTripPage data={data} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setPreViewBool(true)}>
          {/* <Icon style={styles.iconRight} name="md-trash" size={30} /> */}
          {/* <Icon style={styles.iconLeft} name="ios-cloud-upload" size={30} /> */}
          <Text style={styles.dateText}>Date: {data.date}</Text>
          <Text style={styles.timeText}>Time: {data.time}</Text>
        </TouchableOpacity>
        <Button title="Upload Form" color={Colors.primary} onPress={() => uploadForm(index)} />
        <Button title="Delete Form" color={Colors.accent} onPress={() => deleteForm(index)} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginVertical: '3%',
    width: '100%',
    height: 140,
    borderColor: 'black',
    backgroundColor: 'grey'
  },
  typeText: {
    textAlign: 'center',
    marginTop: 6,
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.primary
  },
  dateText: {
    textAlign: 'center',
    marginTop: 0,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary
  },
  timeText: {
    textAlign: 'center',
    marginTop: 2,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary
  },
  iconRight: {
    left: '90%',
    position: 'absolute',
    marginTop: 28
  },
  iconLeft: {
    left: '3%',
    position: 'absolute',
    marginTop: 28
  }

});


export default OldReports;