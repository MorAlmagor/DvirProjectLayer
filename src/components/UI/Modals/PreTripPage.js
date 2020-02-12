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
  // TouchableOpacity
} from 'react-native';
// import MainButton from '../Buttons/MainButton';
import MapView, { Marker } from 'react-native-maps';
import Colors from '../../../Colors/Colors';


const PreTripPage = ({
  data
}) => {
  console.log(data);
  if (data.trailer1Number === false) {
    const markerCoordinates = {
      longitude: data.longitude,
      latitude: data.latitude,
    };
    console.log('no trailers ');
    return (
      <View>
        <View>
          <Text>Date: {data.date}</Text>
          <Text>Time: {data.time}</Text>
          <Text>Company: {data.company}</Text>
          <Text>Odometer: {data.odometer}</Text>
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
          <Text>Truck: <Text>{data.truckNumber}</Text></Text>
          <Text>Brakes Parking: <Text>{data.brakesParking ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Brakes Service: <Text>{data.brakesService ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Brake Accessories: <Text>{data.brakeAccessories ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Air Compresor: <Text>{data.airCompresor ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Air Lines: <Text>{data.airLines ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Light Head: <Text>{data.lightHead ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Light Tail: <Text>{data.lightTail ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Light Stop: <Text>{data.lightStop ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Light Dash: <Text>{data.lightDash ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Light Turn Indicators: <Text>{data.lightTurnIndicators ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>SpareSeal Beam: <Text>{data.spareSealBeam ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Spare Bulbs: <Text>{data.spareBulbs ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Engine: <Text>{data.engine ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Battery: <Text>{data.battery ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fluid Level: <Text>{data.fluidLevel ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Belts And Hoses: <Text>{data.beltsAndHoses ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Oil Level: <Text>{data.oilLevel ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Radiator Level: <Text>{data.radiatorLevel ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Exhaust: <Text>{data.exhaust ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Muffler: <Text>{data.muffler ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Starter: <Text>{data.starter ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Generator: <Text>{data.generator ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Clutch: <Text>{data.clutch ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Transmission: <Text>{data.transmission ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Fule Tanks: <Text>{data.fuleTanks ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Mirrors: <Text>{data.mirrors ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Horn: <Text>{data.horn ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Body: <Text>{data.body ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Frame And Assembly: <Text>{data.frameAndAssembly ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Windshields Wipers: <Text>{data.windshieldsWipers ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Rear End: <Text>{data.rearEnd ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fifth Wheel: <Text>{data.fifthWheel ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Windows: <Text>{data.windows ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Steering: <Text>{data.steering ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Reflective Triangles: <Text>{data.reflectiveTriangles ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fire Extinguisher: <Text>{data.fireExtinguisher ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Reflectors: <Text>{data.reflectors ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Reflective Triangles: <Text>{data.reflectiveTriangles ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fire Extinguisher: <Text>{data.fireExtinguisher ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Flags: <Text>{data.flags ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Flares: <Text>{data.flares ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Tire Chains: <Text>{data.tireChains ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Tires: <Text>{data.tires ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Weels And Rim: <Text>{data.weelsAndRim ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Coupling Devices: <Text>{data.couplingDevices ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Driver Line: <Text>{data.driverLine ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Trip Recorder: <Text>{data.tripRecorder ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Spare Fuses: <Text>{data.spareFuses ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fusees: <Text>{data.fusees ? 'OK' : 'Need Repair'}</Text></Text>
        </View>
      </View>
    );
  } else if (data.trailer1Number !== false && data.trailer2Number === false) {
    console.log('t1');
    const markerCoordinates = {
      longitude: data.longitude,
      latitude: data.latitude,
    };
    return (
      <View>
        <View>
          <Text>Date: {data.date}</Text>
          <Text>Time: {data.time}</Text>
          <Text>Company: {data.company}</Text>
          <Text>Odometer: {data.odometer}</Text>
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
          <Text>Truck: <Text>{data.truckNumber}</Text></Text>
          <Text>Brakes Parking: <Text>{data.brakesParking ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Brakes Service: <Text>{data.brakesService ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Brake Accessories: <Text>{data.brakeAccessories ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Air Compresor: <Text>{data.airCompresor ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Air Lines: <Text>{data.airLines ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Light Head: <Text>{data.lightHead ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Light Tail: <Text>{data.lightTail ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Light Stop: <Text>{data.lightStop ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Light Dash: <Text>{data.lightDash ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Light Turn Indicators: <Text>{data.lightTurnIndicators ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>SpareSeal Beam: <Text>{data.spareSealBeam ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Spare Bulbs: <Text>{data.spareBulbs ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Engine: <Text>{data.engine ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Battery: <Text>{data.battery ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fluid Level: <Text>{data.fluidLevel ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Belts And Hoses: <Text>{data.beltsAndHoses ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Oil Level: <Text>{data.oilLevel ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Radiator Level: <Text>{data.radiatorLevel ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Exhaust: <Text>{data.exhaust ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Muffler: <Text>{data.muffler ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Starter: <Text>{data.starter ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Generator: <Text>{data.generator ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Clutch: <Text>{data.clutch ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Transmission: <Text>{data.transmission ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Fule Tanks: <Text>{data.fuleTanks ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Mirrors: <Text>{data.mirrors ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Horn: <Text>{data.horn ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Body: <Text>{data.body ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Frame And Assembly: <Text>{data.frameAndAssembly ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Windshields Wipers: <Text>{data.windshieldsWipers ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Rear End: <Text>{data.rearEnd ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fifth Wheel: <Text>{data.fifthWheel ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Windows: <Text>{data.windows ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Steering: <Text>{data.steering ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Reflective Triangles: <Text>{data.reflectiveTriangles ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fire Extinguisher: <Text>{data.fireExtinguisher ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Reflectors: <Text>{data.reflectors ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Reflective Triangles: <Text>{data.reflectiveTriangles ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fire Extinguisher: <Text>{data.fireExtinguisher ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Flags: <Text>{data.flags ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Flares: <Text>{data.flares ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Tire Chains: <Text>{data.tireChains ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Tires: <Text>{data.tires ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Weels And Rim: <Text>{data.weelsAndRim ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Coupling Devices: <Text>{data.couplingDevices ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Driver Line: <Text>{data.driverLine ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Trip Recorder: <Text>{data.tripRecorder ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Spare Fuses: <Text>{data.spareFuses ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fusees: <Text>{data.fusees ? 'OK' : 'Need Repair'}</Text></Text>
        </View>
        <View>
          <Text>Tailer NO.1: <Text>{data.trailer1Number}</Text></Text>
          <Text>Brake Connections: <Text>{data.brakeConnectionsTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Brakes: <Text>{data.brakesTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>CouplingDevices: <Text>{data.couplingDevicesTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>CouplingKingPin: <Text>{data.couplingKingPinTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Doors: <Text>{data.doorsTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Hitch: <Text>{data.hitchTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Landing Gear: <Text>{data.landingGearTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Lights: <Text>{data.lightsTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Reflectors: <Text>{data.reflectorsTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Roof: <Text>{data.roofTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Suspension System: <Text>{data.suspensionSystemTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Straps: <Text>{data.strapsTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Tarpulin: <Text>{data.tarpulinTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Tires: <Text>{data.tiresTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>WheelsAndRim: <Text>{data.wheelsAndRimTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
        </View>
      </View>
    );
  } else if (data.trailer1Number !== false && data.trailer2Number !== false) {
    console.log('t1 t2');
    const markerCoordinates = {
      longitude: data.longitude,
      latitude: data.latitude,
    };
    return (
      <View>
        <View>
          <Text>Date: {data.date}</Text>
          <Text>Time: {data.time}</Text>
          <Text>Company: {data.company}</Text>
          <Text>Odometer: {data.odometer}</Text>
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
          <Text>Truck: <Text>{data.truckNumber}</Text></Text>
          <Text>Brakes Parking: <Text>{data.brakesParking ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Brakes Service: <Text>{data.brakesService ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Brake Accessories: <Text>{data.brakeAccessories ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Air Compresor: <Text>{data.airCompresor ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Air Lines: <Text>{data.airLines ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Light Head: <Text>{data.lightHead ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Light Tail: <Text>{data.lightTail ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Light Stop: <Text>{data.lightStop ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Light Dash: <Text>{data.lightDash ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Light Turn Indicators: <Text>{data.lightTurnIndicators ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>SpareSeal Beam: <Text>{data.spareSealBeam ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Spare Bulbs: <Text>{data.spareBulbs ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Engine: <Text>{data.engine ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Battery: <Text>{data.battery ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fluid Level: <Text>{data.fluidLevel ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Belts And Hoses: <Text>{data.beltsAndHoses ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Oil Level: <Text>{data.oilLevel ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Radiator Level: <Text>{data.radiatorLevel ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Exhaust: <Text>{data.exhaust ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Muffler: <Text>{data.muffler ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Starter: <Text>{data.starter ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Generator: <Text>{data.generator ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Clutch: <Text>{data.clutch ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Transmission: <Text>{data.transmission ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Fule Tanks: <Text>{data.fuleTanks ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Mirrors: <Text>{data.mirrors ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Horn: <Text>{data.horn ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Body: <Text>{data.body ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Frame And Assembly: <Text>{data.frameAndAssembly ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Windshields Wipers: <Text>{data.windshieldsWipers ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Rear End: <Text>{data.rearEnd ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fifth Wheel: <Text>{data.fifthWheel ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Windows: <Text>{data.windows ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Steering: <Text>{data.steering ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Reflective Triangles: <Text>{data.reflectiveTriangles ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fire Extinguisher: <Text>{data.fireExtinguisher ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Reflectors: <Text>{data.reflectors ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Reflective Triangles: <Text>{data.reflectiveTriangles ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fire Extinguisher: <Text>{data.fireExtinguisher ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Flags: <Text>{data.flags ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Flares: <Text>{data.flares ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Tire Chains: <Text>{data.tireChains ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Tires: <Text>{data.tires ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Weels And Rim: <Text>{data.weelsAndRim ? 'OK' : 'Need Repair'}</Text></Text>

          <Text>Coupling Devices: <Text>{data.couplingDevices ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Driver Line: <Text>{data.driverLine ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Trip Recorder: <Text>{data.tripRecorder ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Spare Fuses: <Text>{data.spareFuses ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Fusees: <Text>{data.fusees ? 'OK' : 'Need Repair'}</Text></Text>
        </View>
        <View>
          <Text>Tailer NO.1: <Text>{data.trailer1Number}</Text></Text>
          <Text>Brake Connections: <Text>{data.brakeConnectionsTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Brakes: <Text>{data.brakesTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>CouplingDevices: <Text>{data.couplingDevicesTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>CouplingKingPin: <Text>{data.couplingKingPinTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Doors: <Text>{data.doorsTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Hitch: <Text>{data.hitchTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Landing Gear: <Text>{data.landingGearTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Lights: <Text>{data.lightsTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Reflectors: <Text>{data.reflectorsTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Roof: <Text>{data.roofTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Suspension System: <Text>{data.suspensionSystemTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Straps: <Text>{data.strapsTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Tarpulin: <Text>{data.tarpulinTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Tires: <Text>{data.tiresTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>WheelsAndRim: <Text>{data.wheelsAndRimTrailer1 ? 'OK' : 'Need Repair'}</Text></Text>
        </View>
        <View>
          <Text>Tailer NO.2: <Text>{data.trailer2Number}</Text></Text>
          <Text>Brake Connections: <Text>{data.brakeConnectionsTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Brakes: <Text>{data.brakesTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>CouplingDevices: <Text>{data.couplingDevicesTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>CouplingKingPin: <Text>{data.couplingKingPinTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Doors: <Text>{data.doorsTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Hitch: <Text>{data.hitchTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Landing Gear: <Text>{data.landingGearTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Lights: <Text>{data.lightsTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Reflectors: <Text>{data.reflectorsTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Roof: <Text>{data.roofTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Suspension System: <Text>{data.suspensionSystemTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Straps: <Text>{data.strapsTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Tarpulin: <Text>{data.tarpulinTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>Tires: <Text>{data.tiresTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
          <Text>WheelsAndRim: <Text>{data.wheelsAndRimTrailer2 ? 'OK' : 'Need Repair'}</Text></Text>
        </View>
      </View>
    );
  }
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
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
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