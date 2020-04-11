/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { setTruckNumber, changeOdometer, UpdateTruckStatus } from '../../../store/actions/formActions';
import Colors from '../../../Colors/Colors';

const TruckList = ({
  onSaveTruckNumber,
  onOdometerUpdate,
  onUpdateTruckStatus,
  truck,
  index,
  nav
}) => {
//
  const truckSelectedHandler = (truckIndex) => {
    onSaveTruckNumber(truck.truckNum);
    onOdometerUpdate(truck.addomer);
    onUpdateTruckStatus(truck.status);
    nav.navigate('Dvir');
  };

  return (
    <TouchableOpacity onPress={() => truckSelectedHandler(index)}>
      <View style={styles.container}>
        <Text style={styles.numText}>Truck Plate: {truck.truckNum}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    
    width: '100%',
    height: 50,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 2
    
  },
  numText: {
    textAlign: 'center',
    marginTop: 6,
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.primary
  }

});

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveTruckNumber: (truckNum) => dispatch(setTruckNumber(truckNum)),
    onOdometerUpdate: (odometer) => dispatch(changeOdometer(odometer)),
    onUpdateTruckStatus: (truckData) => dispatch(UpdateTruckStatus(truckData)),

  };
};

export default connect(null, mapDispatchToProps)(TruckList);