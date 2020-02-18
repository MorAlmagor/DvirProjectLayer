/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable prefer-template */
/* eslint-disable no-else-return */
import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Platform
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const PreTripPage = ({
  data
}) => {
  if (data.trailer1Number === false) {
    const markerCoordinates = {
      longitude: data.longitude,
      latitude: data.latitude,
    };
    return (
      <ScrollView>
        <View>
          <View>
            <Text style={styles.headTitle}>Type: <Text>{!data.tripStatus ? 'Pre Trip' : 'Post Trip'}</Text></Text>
            <View style={styles.masterC}>
              <View style={styles.headContainer}>
                <Text style={styles.headTitle}>Company: <Text style={{ fontWeight: '400' }}>{data.company}</Text></Text>
                <Text style={styles.headTitle}>Odometer: <Text style={{ fontWeight: '400' }}>{data.odometer}</Text></Text>
              </View>
              <View style={styles.headContainer1}>
                <Text style={styles.headTitle}>Date: <Text style={{ fontWeight: '400' }}>{data.date}</Text></Text>
                <Text style={styles.headTitle}>Time: <Text style={{ fontWeight: '400' }}>{data.time}</Text></Text>
              </View>
            </View>
          </View>
          <View>
            <MapView
              onPress={null}
              style={styles.mapStyle}
              initialRegion={{
                latitude: data.latitude,
                longitude: data.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker title="Picked Location" coordinate={markerCoordinates} />
            </MapView>
          </View>
          <View style={styles.container}>
            <Text style={styles.title1}>Truck NO. <Text>{data.truckNumber}</Text></Text>
            <Text style={styles.subTitle}>Brake System</Text>
            <Text style={{ marginLeft: 10 }}>Brakes Parking: {data.brakesParking ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Brakes Service: {data.brakesService ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Brake Accessories: {data.brakeAccessories ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Air Compresor: {data.airCompresor ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Air Lines: {data.airLines ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Lights</Text>
            <Text style={{ marginLeft: 10 }}>Light Head:  {data.lightHead ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Light Tail:  {data.lightTail ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Light Stop:  {data.lightStop ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Light Dash:  {data.lightDash ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Light Turn Indicators: {data.lightTurnIndicators ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Spare Seal Beam:  {data.spareSealBeam ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Spare Bulbs: {data.spareBulbs ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Engine</Text>
            <Text style={{ marginLeft: 10 }}>Engine:  {data.engine ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Battery:  {data.battery ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Fluid Level:  {data.fluidLevel ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Belts And Hoses:  {data.beltsAndHoses ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Oil Level:  {data.oilLevel ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Radiator Level:  {data.radiatorLevel ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Exhaust:  {data.exhaust ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Muffler:  {data.muffler ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Starter:  {data.starter ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Generator:  {data.generator ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Clutch:  {data.clutch ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Transmission:  {data.transmission ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Body</Text>
            <Text style={{ marginLeft: 10 }}>Fule Tanks:  {data.fuleTanks ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Mirrors:  {data.mirrors ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Horn:  {data.horn ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Body:  {data.body ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Frame And Assembly:  {data.frameAndAssembly ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Windshields Wipers:  {data.windshieldsWipers ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Rear End:  {data.rearEnd ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Fifth Wheel:  {data.fifthWheel ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Windows:  {data.windows ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Steering</Text>
            <Text style={{ marginLeft: 10 }}>Steering:  {data.steering ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Front Axle:  {data.frontAxle ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Suspension System:  {data.suspensionSystem ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Safety</Text>
            <Text style={{ marginLeft: 10 }}>Reflectors:  {data.reflectors ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Reflective Triangles:  {data.reflectiveTriangles ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Fire Extinguisher:  {data.fireExtinguisher ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Flags:  {data.flags ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Flares:  {data.flares ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Wheels and Tires</Text>
            <Text style={{ marginLeft: 10 }}>Tire Chains:  {data.tireChains ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Tires:  {data.tires ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Rims:  {data.weelsAndRim ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Other</Text>
            <Text style={{ marginLeft: 10 }}>Coupling Devices:  {data.couplingDevices ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Driver Line:  {data.driverLine ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Trip Recorder:  {data.tripRecorder ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Spare Fuses:  {data.spareFuses ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Fuses:  {data.fusees ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
          </View>
        </View>
      </ScrollView>
    );
  } else if (data.trailer1Number !== false && data.trailer2Number === false) {
    const markerCoordinates = {
      longitude: data.longitude,
      latitude: data.latitude,
    };
    return (
      <ScrollView>
        <View style={styles.masterC}>
          <View style={styles.headContainer}>
            <Text style={styles.headTitle}>Company: <Text style={{ fontWeight: '400' }}>{data.company}</Text></Text>
            <Text style={styles.headTitle}>Odometer: <Text style={{ fontWeight: '400' }}>{data.odometer}</Text></Text>
          </View>
          <View style={styles.headContainer1}>
            <Text style={styles.headTitle}>Date: <Text style={{ fontWeight: '400' }}>{data.date}</Text></Text>
            <Text style={styles.headTitle}>Time: <Text style={{ fontWeight: '400' }}>{data.time}</Text></Text>
          </View>
        </View>
        <View>
          <MapView
            onPress={null}
            style={styles.mapStyle}
            initialRegion={{
              latitude: data.latitude,
              longitude: data.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker title="Picked Location" coordinate={markerCoordinates} />
          </MapView>
        </View>
        <View>
          <View style={styles.container}>
            <Text style={styles.title1}>Truck NO. <Text>{data.truckNumber}</Text></Text>
            <Text style={styles.subTitle}>Brake System</Text>
            <Text style={{ marginLeft: 10 }}>Brakes Parking: {data.brakesParking ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Brakes Service: {data.brakesService ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Brake Accessories: {data.brakeAccessories ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Air Compresor: {data.airCompresor ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Air Lines: {data.airLines ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Lights</Text>
            <Text style={{ marginLeft: 10 }}>Light Head:  {data.lightHead ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Light Tail:  {data.lightTail ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Light Stop:  {data.lightStop ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Light Dash:  {data.lightDash ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Light Turn Indicators: {data.lightTurnIndicators ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>SpareSeal Beam:  {data.spareSealBeam ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Spare Bulbs: {data.spareBulbs ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Engine</Text>
            <Text style={{ marginLeft: 10 }}>Engine:  {data.engine ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Battery:  {data.battery ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Fluid Level:  {data.fluidLevel ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Belts And Hoses:  {data.beltsAndHoses ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Oil Level:  {data.oilLevel ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Radiator Level:  {data.radiatorLevel ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Exhaust:  {data.exhaust ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Muffler:  {data.muffler ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Starter:  {data.starter ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Generator:  {data.generator ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Clutch:  {data.clutch ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Transmission:  {data.transmission ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Body</Text>
            <Text style={{ marginLeft: 10 }}>Fule Tanks:  {data.fuleTanks ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Mirrors:  {data.mirrors ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Horn:  {data.horn ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Body:  {data.body ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Frame And Assembly:  {data.frameAndAssembly ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Windshields Wipers:  {data.windshieldsWipers ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Rear End:  {data.rearEnd ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Fifth Wheel:  {data.fifthWheel ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Windows:  {data.windows ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Steering</Text>
            <Text style={{ marginLeft: 10 }}>Steering:  {data.steering ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Front Axle:  {data.frontAxle ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Suspension System:  {data.suspensionSystem ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Safety</Text>
            <Text style={{ marginLeft: 10 }}>Reflectors:  {data.reflectors ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Reflective Triangles:  {data.reflectiveTriangles ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Fire Extinguisher:  {data.fireExtinguisher ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Flags:  {data.flags ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Flares:  {data.flares ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Wheels and Tires</Text>
            <Text style={{ marginLeft: 10 }}>Tire Chains:  {data.tireChains ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Tires:  {data.tires ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Rims:  {data.weelsAndRim ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Other</Text>
            <Text style={{ marginLeft: 10 }}>Coupling Devices:  {data.couplingDevices ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Driver Line:  {data.driverLine ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Trip Recorder:  {data.tripRecorder ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Spare Fuses:  {data.spareFuses ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Fuses:  {data.fusees ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Tailer NO.1 <Text>{data.trailer1Number}</Text></Text>
            <Text style={{ marginLeft: 10 }}>Brake Connections:  {data.brakeConnectionsTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Brakes:  {data.brakesTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Coupling Devices:  {data.couplingDevicesTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Coupling King Pin:  {data.couplingKingPinTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Doors:  {data.doorsTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Hitch:  {data.hitchTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Landing Gear:  {data.landingGearTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Lights:  {data.lightsTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Reflectors:  {data.reflectorsTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Roof:  {data.roofTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Suspension System:  {data.suspensionSystemTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Straps:  {data.strapsTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Tarpulin:  {data.tarpulinTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Tires:  {data.tiresTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Wheels And Rims:  {data.wheelsAndRimTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
          </View>
        </View>
      </ScrollView>
    );
  } else if (data.trailer1Number !== false && data.trailer2Number !== false) {
    const markerCoordinates = {
      longitude: data.longitude,
      latitude: data.latitude,
    };
    return (
      <ScrollView>
        <View style={styles.masterC}>
          <View style={styles.headContainer}>
            <Text style={styles.headTitle}>Company: <Text style={{ fontWeight: '400' }}>{data.company}</Text></Text>
            <Text style={styles.headTitle}>Odometer: <Text style={{ fontWeight: '400' }}>{data.odometer}</Text></Text>
          </View>
          <View style={styles.headContainer1}>
            <Text style={styles.headTitle}>Date: <Text style={{ fontWeight: '400' }}>{data.date}</Text></Text>
            <Text style={styles.headTitle}>Time: <Text style={{ fontWeight: '400' }}>{data.time}</Text></Text>
          </View>
        </View>
        <View>
          <MapView
            onPress={null}
            style={styles.mapStyle}
            initialRegion={{
              latitude: data.latitude,
              longitude: data.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker title="Picked Location" coordinate={markerCoordinates} />
          </MapView>
        </View>
        <View>
          <View style={styles.container}>
            <Text style={styles.title1}>Truck NO. <Text>{data.truckNumber}</Text></Text>
            <Text style={styles.subTitle}>Brake System</Text>
            <Text style={{ marginLeft: 10 }}>Brakes Parking: {data.brakesParking ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Brakes Service: {data.brakesService ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Brake Accessories: {data.brakeAccessories ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Air Compresor: {data.airCompresor ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Air Lines: {data.airLines ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Lights</Text>
            <Text style={{ marginLeft: 10 }}>Light Head:  {data.lightHead ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Light Tail:  {data.lightTail ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Light Stop:  {data.lightStop ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Light Dash:  {data.lightDash ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Light Turn Indicators: {data.lightTurnIndicators ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>SpareSeal Beam:  {data.spareSealBeam ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Spare Bulbs: {data.spareBulbs ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Engine</Text>
            <Text style={{ marginLeft: 10 }}>Engine:  {data.engine ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Battery:  {data.battery ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Fluid Level:  {data.fluidLevel ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Belts And Hoses:  {data.beltsAndHoses ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Oil Level:  {data.oilLevel ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Radiator Level:  {data.radiatorLevel ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Exhaust:  {data.exhaust ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Muffler:  {data.muffler ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Starter:  {data.starter ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Generator:  {data.generator ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Clutch:  {data.clutch ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Transmission:  {data.transmission ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Body</Text>
            <Text style={{ marginLeft: 10 }}>Fule Tanks:  {data.fuleTanks ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Mirrors:  {data.mirrors ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Horn:  {data.horn ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Body:  {data.body ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Frame And Assembly:  {data.frameAndAssembly ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Windshields Wipers:  {data.windshieldsWipers ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Rear End:  {data.rearEnd ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Fifth Wheel:  {data.fifthWheel ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Windows:  {data.windows ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Steering</Text>
            <Text style={{ marginLeft: 10 }}>Steering:  {data.steering ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Front Axle:  {data.frontAxle ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Suspension System:  {data.suspensionSystem ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Safety</Text>
            <Text style={{ marginLeft: 10 }}>Reflectors:  {data.reflectors ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Reflective Triangles:  {data.reflectiveTriangles ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Fire Extinguisher:  {data.fireExtinguisher ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Flags:  {data.flags ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Flares:  {data.flares ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Wheels and Tires</Text>
            <Text style={{ marginLeft: 10 }}>Tire Chains:  {data.tireChains ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Tires:  {data.tires ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Rims:  {data.weelsAndRim ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>

            <Text style={styles.subTitle}>Other</Text>
            <Text style={{ marginLeft: 10 }}>Coupling Devices:  {data.couplingDevices ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Driver Line:  {data.driverLine ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Trip Recorder:  {data.tripRecorder ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Spare Fuses:  {data.spareFuses ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Fuses:  {data.fusees ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Tailer NO.1 <Text>{data.trailer1Number}</Text></Text>
            <Text style={{ marginLeft: 10 }}>Brake Connections:  {data.brakeConnectionsTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Brakes:  {data.brakesTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Coupling Devices:  {data.couplingDevicesTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Coupling King Pin:  {data.couplingKingPinTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Doors:  {data.doorsTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Hitch:  {data.hitchTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Landing Gear:  {data.landingGearTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Lights:  {data.lightsTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Reflectors:  {data.reflectorsTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Roof:  {data.roofTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Suspension System:  {data.suspensionSystemTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Straps:  {data.strapsTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Tarpulin:  {data.tarpulinTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Tires:  {data.tiresTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Wheels And Rims:  {data.wheelsAndRimTrailer1 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Tailer NO.2 <Text>{data.trailer2Number}</Text></Text>
            <Text style={{ marginLeft: 10 }}>Brake Connections:  {data.brakeConnectionsTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Brakes:  {data.brakesTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Coupling Devices:  {data.couplingDevicesTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Coupling King Pin:  {data.couplingKingPinTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Doors:  {data.doorsTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Hitch:  {data.hitchTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Landing Gear:  {data.landingGearTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Lights:  {data.lightsTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Reflectors:  {data.reflectorsTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Roof:  {data.roofTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Suspension System:  {data.suspensionSystemTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Straps:  {data.strapsTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Tarpulin:  {data.tarpulinTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Tires:  {data.tiresTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
            <Text style={{ marginLeft: 10 }}>Wheels And Rims:  {data.wheelsAndRimTrailer2 ? <Text style={{ fontWeight: '500', color: '#2CC84D' }}>OK</Text> : <Text style={{ fontWeight: '500', color: '#E10600' }}>Need Repair</Text>}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%',
    marginBottom: '5%',
    paddingTop: 12,
    paddingBottom: 4,
    alignSelf: 'flex-start',
    justifyContent: 'center'
  },
  masterC: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    alignContent: 'center',
    paddingBottom: 2
  },
  headContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  headContainer1: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  headTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingBottom: 8,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: '8%',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingTop: 12,
    paddingBottom: 4,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  report: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 10
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
    paddingHorizontal: 8,
    paddingVertical: 10
  },
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