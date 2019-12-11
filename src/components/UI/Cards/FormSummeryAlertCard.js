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
        {TruckDetail ? 'You Allow To Ride, Drive Carefuly' : ' You Are Not Allowed To Travel' }
      </Text>
    );
  } else if (trailer1Active !== null && trailer2Active === null) {
    TrailersDetails = (
      <Text style={styles.alertGuildText}>
        {Trailer1Detail ? 'Trailer NO1 Add To Truck & Safe For Travel' : 'Trailer NO1 Not Safe For Travel' }
      </Text>
    );
    SummeryAlert = (
      <Text style={styles.alertGuildText}>
        {TruckDetail && Trailer1Detail ? 'You Allow To Ride, Drive Carefuly' : ' You Are Not Allowed To Travel' }
      </Text>
    );
  } else if (trailer1Active !== null && trailer1Active !== null) {
    TrailersDetails = (
      <View>
        <Text style={styles.alertGuildText}>
          {Trailer1Detail ? 'Trailer NO1 Safe For Travel' : 'Trailer NO1 Not Safe For Travel'}
        </Text>
        <Text style={styles.alertGuildText}>
          {Trailer2Detail ? 'Trailer NO2 Safe For Travel' : 'Trailer1 NO2 Safe For Travel'}
        </Text>
      </View>
    );
    SummeryAlert = (
      <Text style={styles.alertGuildText}>
        {TruckDetail && Trailer1Detail && Trailer2Detail
          ? 'You Allow To Ride, Drive Carefuly'
          : ' You Are Not Allowed To Travel' }
      </Text>
    );
  }

  return (
    <View style={styles.alertGuildContainer}>
      <Text>_________Tap For Detail_________</Text>
      {SummeryAlert}
      <Text style={styles.alertGuildText}>
        {TruckDetail
          ? 'Truck Is Safety For Travel'
          : 'Truck Is Not Safety For Travel'}
      </Text>
      {TrailersDetails}
      <Text style={styles.alertGuildText}>A Message Was Sent To Your Company</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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


export default FormSummeryAlertCard;