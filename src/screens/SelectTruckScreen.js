/* eslint-disable no-else-return */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  View,
  TextInput,
  StyleSheet,
  Platform,
  Text
} from 'react-native';
import TruckList from '../components/UI/MapReturnSection/TruckList';
import Colors from '../Colors/Colors';

const SelectTruckScreen = ({
  navigation,
  truckListData,
}) => {
  const [licensePlate, setLicensePlate] = useState('');

  let TrucklistToShow = null;
  if (licensePlate.length > 3) {
    const updateTruckList = [];
    const truckListKeys = Object.keys(truckListData);
    for (let i = 0; i < truckListKeys.length; i += 1) {
      const tempFilter = truckListKeys[i].indexOf(licensePlate);
      if (tempFilter !== -1) {
        updateTruckList.push(truckListData[truckListKeys[i]]);
      }
    }

    TrucklistToShow = (
      <FlatList
        keyExtractor={(truck) => truck.truckNum}
        data={updateTruckList}
        renderItem={({ item }) => {
          if (item.onTrip === false) {
            return (
              <TruckList
                truck={item}
                odometer={item.addomer}
                truckNum={item.truckNum}
                nav={navigation}
              />
            );
          } else {
            return null;
          }
        }}
      />
    );
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <View>
        <Text style={styles.titleStyle}>Please enter your vehicle licence plate</Text>
      </View>
      <View>
        <TextInput
          placeholderTextColor="grey"
          placeholder="Enter license plate"
          style={styles.inputC}
          value={licensePlate}
          autoCorrect={false}
          onChangeText={(value) => setLicensePlate(value)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        {TrucklistToShow}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 20,
    fontSize: 20,
    color: Colors.primary,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginVertical: 12,
    marginLeft: 12,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'flex-start',
    marginVertical: 12,
    marginLeft: 12,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  inputC: {
    marginTop: 15,
    height: 50,
    width: '90%',
    minWidth: 250,
    padding: 12,
    top: 14,
    borderColor: '#aa0061',
    borderWidth: 1,
    borderRadius: 26,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    textTransform: 'uppercase'
  },
  input: {
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    truckListData: state.trucks.trucks
  };
};

export default connect(mapStateToProps, null)(SelectTruckScreen);
