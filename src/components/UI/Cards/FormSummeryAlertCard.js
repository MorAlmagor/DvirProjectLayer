/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  Platform,
  AsyncStorage,
  Button,
  TouchableOpacity
} from 'react-native';
import Colors from '../../../Colors/Colors';

const FormSummeryAlertCard = ({
  tariler1Summery,
  tariler2Summery,
  truckSummery,
  truckRaf,
  trailerRaf,
  trailer1Active,
  trailer2Active
}) => {
  const TruckDetail = truckRaf > truckSummery.score;
  const Trailer1Detail = trailerRaf > tariler1Summery.score;
  const Trailer2Detail = trailerRaf > tariler2Summery.score;
  let SummeryAlert = null;
  let TrailersDetails = null;
  if (trailer1Active === null && trailer2Active === null) {
    TrailersDetails = (
      <Text style={styles.alertGuildText}>No Trailers Add To Truck</Text>
    );
    SummeryAlert = (
      <Text style={styles.alertGuildText}>
        {TruckDetail ? 'You\'r Allow To Ride, Drive Carefuly' : 'You\'r Are Not Allowed To Drive' }
      </Text>
    );
  } else if (trailer1Active !== null && trailer2Active === null) {
    TrailersDetails = (
      <Text style={styles.alertGuildText}>
        {Trailer1Detail ? 'Trailer NO.1 Add To Truck & Safe For Drive' : 'Trailer NO.1 Not Safe For Drive' }
      </Text>
    );
    SummeryAlert = (
      <Text style={styles.alertGuildText}>
        {TruckDetail && Trailer1Detail ? 'You\'r Allow To Ride, Drive Carefuly' : 'You\'r Not Allowed To Drive' }
      </Text>
    );
  } else if (trailer1Active !== null && trailer1Active !== null) {
    TrailersDetails = (
      <View>
        <Text style={styles.alertGuildText}>
          {Trailer1Detail ? 'Trailer NO.1 Safe For Drive' : 'Trailer NO.1 Not Safe For Drive'}
        </Text>
        <Text style={styles.alertGuildText}>
          {Trailer2Detail ? 'Trailer NO.2 Safe For Drive' : 'Trailer NO.2 Safe For Drive'}
        </Text>
      </View>
    );
    SummeryAlert = (
      <Text style={styles.alertGuildText}>
        {TruckDetail && Trailer1Detail && Trailer2Detail
          ? 'You\'r Allow To Ride, Drive Carefuly'
          : 'You\'r Not Allowed To Drive' }
      </Text>
    );
  }

  return (
    <View style={styles.alertGuildContainer}>
      {/* <Text>Tap For Detail</Text> */}
      {SummeryAlert}
      <Text style={styles.alertGuildText}>
        {TruckDetail
          ? 'Truck Is Safe For Drive'
          : 'Truck Is Not Safe For Drive'}
      </Text>
      {TrailersDetails}
      <Text style={styles.alertGuildText}>A Message Was Sent To Your Company</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alertGuildContainer: {
    alignItems: 'flex-start',
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    paddingVertical:10,
    marginBottom: 4,
    marginTop: 10
  },
  alertGuildText: {
    color: Colors.primary,
    fontWeight: '400',
    marginTop: 5,
    marginLeft: 12,
    fontSize: 15
  }
});


export default FormSummeryAlertCard;