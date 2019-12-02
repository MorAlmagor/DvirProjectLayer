import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import MainButton from '../Buttons/MainButton';
import Colors from '../../../Colors/Colors';

// eslint-disable-next-line consistent-return
const AddTrailerModal = ({ title, ModalShow }) => {
  if (title === 'Trailer NO.1') {
    return (
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Text style={styles.noFaultsText}>Add Trailer NO.1</Text>
          <Text>Please Write Trailer Number</Text>
          <View>
            <View style={styles.buttonsView}>
              <MainButton onpress={() => ModalShow(false)}>I Confirm</MainButton>
            </View>
            <View style={styles.buttonsView}>
              <MainButton>Go back</MainButton>
            </View>
          </View>
        </View>
      </View>
    );
  // eslint-disable-next-line no-else-return
  } else {
    return (
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Text style={styles.noFaultsText}>Add Trailer NO.2</Text>
          <Text>Please Write Trailer Number</Text>
          <View>
            <View style={styles.buttonsView}>
              <MainButton>I Confirm</MainButton>
            </View>
            <View style={styles.buttonsView}>
              <MainButton onpress={() => ModalShow(false)}>Go back</MainButton>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  modal: {
    alignContent: 'center',
    position: 'absolute',
    backgroundColor: 'white',
    width: '87%',
    padding: '10%',
    zIndex: 500,
    top: '15%',
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 2,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  buttonsView: {
    bottom: 15,
    top: 5
  },
  noFaultsText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '400',
    color: '#25282A',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  imageContainer: {
    alignItems: 'center',
    margin: '5%'

  },
  backdrop: {
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    zIndex: 400,
    left: 0,
    top: 0,
    opacity: 0.9
  }
});

const mapStateToProps = (state) => {
  return {
    truckStatus: state.form.truckStatus
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };


export default connect(mapStateToProps, null)(AddTrailerModal);