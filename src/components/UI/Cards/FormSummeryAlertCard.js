/* eslint-disable max-len */
/* eslint-disable no-else-return */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
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
  trailer2Active,
  postTripMode
}) => {
  const TruckDetail = truckRaf > truckSummery.score;
  const Trailer1Detail = trailerRaf > tariler1Summery.score;
  const Trailer2Detail = trailerRaf > tariler2Summery.score;
  let SummeryAlert = null;
  let TrailersDetails = null;

  let blockBool = false;
  if (Trailer1Detail && Trailer2Detail && TruckDetail) {
    if (postTripMode) {
      blockBool = (
        <Text style={styles.alertGuildText}>Post-Trip Form Upload</Text>
      );
    } else {
      blockBool = (
        <Text style={styles.alertGuildText}>Pre-Trip Form Upload</Text>
      );
    }
  } else {
    blockBool = (
      <>
        <Text style={styles.alertGuildText}>Many Mechanical Failures Were Reported</Text>
        <Text style={styles.alertGuildText}>The System Has Been Blocked</Text>
        <Text style={styles.alertGuildText}>Form Not Upload</Text>
      </>
    );
  }

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
    if (postTripMode) {
      SummeryAlert = (
        <Text style={styles.alertGuildText}>
          {TruckDetail && Trailer1Detail ? 'Thank You For Reporting Form Saved' : 'Thank You For Reporting Form Saved \n You\'r Not Allowed To Drive' }
        </Text>
      );
    } else {
      SummeryAlert = (
        <Text style={styles.alertGuildText}>
          {TruckDetail && Trailer1Detail ? 'You\'r Allow To Ride, Drive Carefuly' : 'You\'r Not Allowed To Drive' }
        </Text>
      );
    }
  } else if (trailer1Active !== null && trailer1Active !== null) {
    TrailersDetails = (
      <View>
        {trailer1Active
          ? <Text style={styles.alertGuildText}> {Trailer1Detail ? `Trailer NO.${trailer1Active} Safe For Drive` : `Trailer NO.${trailer1Active} Not Safe For Drive`}</Text>
          : <Text style={styles.alertGuildText}>Trailer NO.1 Not Add</Text>}
        {trailer2Active
          ? <Text style={styles.alertGuildText}> {Trailer2Detail ? `Trailer NO.${trailer2Active} Safe For Drive` : `Trailer NO.${trailer2Active} Not Safe For Drive`}</Text>
          : <Text style={styles.alertGuildText}>Trailer NO.2 Not Add</Text>}
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
  if (!postTripMode) {
    return (
      <View style={styles.alertGuildContainer}>
        {SummeryAlert}
        {blockBool}
        <Text style={styles.alertGuildText}>
          {TruckDetail
            ? 'Truck Is Safe For Drive'
            : 'Truck Is Not Safe For Drive'}
        </Text>
        {TrailersDetails}
        <Text style={styles.alertGuildText}>A Message Was Sent To Your Company</Text>
        <Text style={styles.alertGuildText}>Tap For Details</Text>
      </View>
    );
  } else {
    let trailer1sum = null;
    let trailer2sum = null;
    if (trailer1Active) {
      if (Trailer1Detail) {
        trailer1sum = (
          <Text style={styles.alertGuildText}>Trailer {trailer1Active} Mechanical Ok!</Text>
        );
      } else {
        trailer1sum = (
          <Text style={styles.alertGuildText}>Trailer {trailer1Active} Mechanical Must Repair</Text>
        );
      }
      if (trailer2Active) {
        if (Trailer2Detail) {
          trailer2sum = (
            <Text style={styles.alertGuildText}>Trailer {trailer2Active} Mechanical Ok!</Text>
          );
        } else {
          trailer2sum = (
            <Text style={styles.alertGuildText}>Trailer {trailer2Active} Mechanical Must Repair</Text>
          );
        }
      }
    }

    return (
      <View style={styles.alertGuildContainer}>
        {blockBool}
        <Text style={styles.alertGuildText}>
          {TruckDetail
            ? 'Truck Mechanical Is Good'
            : 'Truck Mechanical Must Repair'}
        </Text>
        {trailer1sum}
        {trailer2sum}
        <Text style={styles.alertGuildText}>A Message Was Sent To Your Company</Text>
        <Text style={styles.alertGuildText}>Tap For Details</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  alertGuildContainer: {
    alignItems: 'flex-start',
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    paddingVertical: 10,
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

const mapStateToProps = (state) => {
  return {
    postTripMode: state.appUI.postTripMode,
  };
};

export default connect(mapStateToProps, null)(FormSummeryAlertCard);