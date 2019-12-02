// import { changeCheckStatus } from '../../store/actions/formActions';
import { connect } from 'react-redux';
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { getStringDate } from '../../utils/dateCreator';
import { changeDate, changeOdometer } from '../../store/actions/formActions';

const FormIntroSection = ({
  dvirStatus,
  navigation,
  carrier,
  lastOdometer,
  onOdometerUpdate,
  onDateUpdate,
  choosenLocation
}) => {
  const dateString = getStringDate();

  onDateUpdate(dateString);

  const onChangeText = (OdometerInputText) => {
    onOdometerUpdate(OdometerInputText.replace(/[^0-9]/g, ''));
  };

  // dvirStatus = true;

  let inputSction = (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
      <View style={{}}>
        <View style={{}}>
          <TextInput
            placeholder="Carrier"
            value={carrier}
            placeholderTextColor="grey"
            style={styles.inputC}
            autoCorrect={false}
            editable={false}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Map')}>
            {!choosenLocation
              ? <Text style={styles.locationDemiInputTextFalse}>Set Your Location</Text>
              : <Text style={styles.locationDemiInputTextTrue}>Current Location</Text>}
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View>
          <TextInput
            onChangeText={(text) => onChangeText(text)}
            placeholder="Odometer"
            value={lastOdometer}
            style={styles.input}
            autoCompleteType="off"
            autoCorrect={false}
            keyboardType="numeric"
            blurOnSubmit
            placeholderTextColor="grey"
          />
        </View>
        <View>
          <TextInput
            value={dateString}
            style={styles.input}
            editable={false}
            blurOnSubmit
          />
        </View>
      </View>
    </View>

  );
  if (dvirStatus) {
    inputSction = (
      <View>
        <View>
          <TextInput
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
            // placeholder={placeholder}
            placeholderTextColor="grey"
            // style={styles.input}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            blurOnSubmit
          />
        </View>
        <View>
          <TextInput
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
            // placeholder={placeholder}
            placeholderTextColor="grey"
            // style={styles.input}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            blurOnSubmit
          />
        </View>
      </View>
    );
  }


  return inputSction;
};


const styles = StyleSheet.create({
  inputC: {
    marginTop: 15,
    height: 40,
    width: 180,
    padding: 12,
    top: 14,
    marginVertical: 4,
    borderColor: '#aa0061',
    borderWidth: 1,
    borderRadius: 26,
    justifyContent: 'space-between',
    flexDirection: 'column',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  input: {
    height: 40,
    width: 180,
    padding: 12,
    top: 14,
    marginVertical: 4,
    borderColor: '#aa0061',
    borderWidth: 1,
    borderRadius: 26,
    justifyContent: 'space-between',
    flexDirection: 'column',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  ButtonInput: {
    height: 40,
    width: 180,
    padding: 12,
    top: 14,
    marginVertical: 4,
    marginHorizontal: 12,
    borderColor: '#aa0061',
    borderWidth: 1,
    borderRadius: 26,
    justifyContent: 'space-between',
    flexDirection: 'column',
    color: 'grey',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  locationDemiInputTextFalse: {
    height: 40,
    width: 180,
    padding: 12,
    top: 8,
    marginVertical: 10,
    borderColor: '#aa0061',
    borderWidth: 1,
    borderRadius: 26,
    justifyContent: 'space-between',
    flexDirection: 'column',
    color: 'grey'
  },
  locationDemiInputTextTrue: {
    height: 40,
    width: 180,
    padding: 12,
    top: 8,
    marginVertical: 10,
    borderColor: '#aa0061',
    borderWidth: 1,
    borderRadius: 26,
    justifyContent: 'space-between',
    flexDirection: 'column',
    color: 'black',
    fontWeight: '500'
  }
});
const mapStateToProps = (state) => {
  return {
    carrier: state.form.carrier,
    lastOdometer: state.form.lastOdometer,
    choosenLocation: state.form.locationDetails.coords.latitude
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDateUpdate: (date) => dispatch(changeDate(date)),
    onOdometerUpdate: (date) => dispatch(changeOdometer(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(FormIntroSection));