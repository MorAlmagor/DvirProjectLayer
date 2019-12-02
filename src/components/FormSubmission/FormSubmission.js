import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  CheckBox,
  StyleSheet,
  Platform
} from 'react-native';
import { withNavigation } from 'react-navigation';
import MainButton from '../UI/Buttons/MainButton';
import Colors from '../../Colors/Colors';


const FormSubmission = ({
  checkboxVal,
  modalshowHandler,
  clickedHandler,
  setCheckBoxHandler,
  clicked,
  navigation,
  locationCoords
}) => {
  const submitHandler = () => {
    // תיקון לא טוב צרך להוסיף רדוסר חדש
    if (checkboxVal && locationCoords.longitude) {
      modalshowHandler(true);
    } else {
      clickedHandler(true);
    }
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
      <MainButton onpress={submitHandler}>SUBMIT</MainButton>
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
    locationCoords: state.form.locationDetails.coords
  };
};


export default connect(mapStateToProps, null)(withNavigation(FormSubmission));