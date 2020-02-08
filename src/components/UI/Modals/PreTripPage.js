/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable prefer-template */
/* eslint-disable no-else-return */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  // TouchableOpacity
} from 'react-native';
// import MainButton from '../Buttons/MainButton';
import Colors from '../../../Colors/Colors';

const PreTripPage = ({
  data
}) => {
  console.log(data);
  return (
    <View style={styles.modal}>
      <ScrollView>
        <Text>Pre Trip</Text>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  modal: {
    zIndex: 500,
    top: '2%',
    // fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  graphBar: {
    textAlign: 'center',
    width: '20%',
    bottom: '2%',
    color: Colors.primary
  },
  backdrop: {
    alignItems: 'center',
    alignContent: 'flex-end',
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    zIndex: 400,
    left: 0,
    top: 0,
  },
  alertGuildContainer: {
    alignItems: 'center',
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9
  },
  alertGuildText: {
    color: Colors.primary,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 15,
    fontSize: 17
  }

});

const mapStateToProps = (state) => {
  return {
    truckStatus: state.form.truckStatus,
    trailer1Valid: state.form.trailer1.trailerNumber,
    trailer2Valid: state.form.trailer2.trailerNumber,
    trailer1Status: state.form.trailer1,
    trailer2Status: state.form.trailer2,
    truckRaf: state.appUI.truckRaf,
    trailerRaf: state.appUI.trailerRaf,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

export default connect(mapStateToProps, null)(PreTripPage);