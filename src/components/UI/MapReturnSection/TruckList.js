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
import { setTruckNumber } from '../../../store/actions/formActions';
import Colors from '../../../Colors/Colors';

const TruckList = ({
  truckNum,
  onSaveTruckNumber,
  nav
}) => {
//
  const truckSelectedFandler = () => {
    onSaveTruckNumber(truckNum);
    nav.navigate('Dvir');
  };

  return (
    <TouchableOpacity onPress={() => truckSelectedFandler()}>
      <View style={styles.container}>
        <Text style={styles.numText}>Truck Plate: {truckNum}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: '3%',
    width: '100%',
    height: 50,
    borderColor: 'black',
    backgroundColor: 'grey'
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
    onSaveTruckNumber: (truckNum) => dispatch(setTruckNumber(truckNum))
  };
};

export default connect(null, mapDispatchToProps)(TruckList);