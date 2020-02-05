import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  CheckBox,
  StyleSheet,
  Platform,
  Alert
} from 'react-native';
import { withNavigation } from 'react-navigation';
import MainButton from '../UI/Buttons/MainButton';
import Colors from '../../Colors/Colors';


const FormSubmission = ({
  checkboxVal,
  clickedHandler,
  setCheckBoxHandler,
  clicked,
  navigation,
  locationCoords,
  userCarrier,
  odometer,
  submitFNC
}) => {
  const odometerBool = odometer !== '';
  const carrierBool = userCarrier !== '';

  const submitHandler = () => {
    if (checkboxVal && locationCoords.longitude && odometerBool && carrierBool) {
      submitFNC();
    } else {
      clickedHandler(true);
    }
  };


  const lastFormValidation = () => {
    Alert.alert(
      'A request will verify that the details you entered are correct',
      'There is no way to go back or make changes here...',
      [
        {
          text: 'Wait!',
          onPress: () => (null),
          style: 'cancel',
        },
        {
          text: 'OK, Submit',
          onPress: () => submitHandler()
        },
      ],
    );
  };

  return (
    <View>
      <View style={styles.termsOfUseContainer}>
        <View style={styles.submitCheckbox}>
          <CheckBox
            value={checkboxVal}
            onChange={() => setCheckBoxHandler(!checkboxVal)}
          />
        </View>
        <View style={styles.submitTextView}>
          <Text
            style={styles.submitText}
          >By clicking the SUBMIT button, I confirm that I have read the
            <Text
              onPress={() => navigation.navigate('Terms')}
              style={styles.linkText}
            > Terms of Use
            </Text> and all the information I mentioned above is real
          </Text>
        </View>
      </View>
      {clicked && !checkboxVal
        && <Text style={styles.termsOfUsealert}>Please accept the terms of use to continue</Text>}
      {clicked && !locationCoords.longitude
        && <Text style={styles.termsOfUsealert}>Please Select Your Location</Text>}
      {clicked && !carrierBool
        && <Text style={styles.termsOfUsealert}>Please Type Your Carrier</Text>}
      {clicked && !odometerBool
        && <Text style={styles.termsOfUsealert}>Please type Truck Odometer</Text>}
      <MainButton onpress={lastFormValidation}>SUBMIT</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  termsOfUseContainer: {
    flexDirection: 'row',
    paddingTop: 6
  },
  termsOfUsealert: {
    textAlign: 'center',
    color: 'red',
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  submitCheckbox: {
    flex: 1,
    paddingTop: 6,
    paddingLeft: 2,
    marginLeft: 6
  },
  submitTextView: {
    flex: 9,
    paddingTop: 10,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  submitText: {
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  linkText: {
    textDecorationColor: Colors.primary,
    textDecorationStyle: 'solid',
    fontWeight: 'bold',
    color: Colors.primary,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  btn: {
    zIndex: 100
  }
});

const mapStateToProps = (state) => {
  return {
    locationCoords: state.form.locationDetails.coords,
    userCarrier: state.form.carrier,
    odometer: state.form.lastOdometer
  };
};


export default connect(mapStateToProps, null)(withNavigation(FormSubmission));