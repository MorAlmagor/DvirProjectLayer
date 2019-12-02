import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Button,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView, { Marker } from 'react-native-maps';
import { withNavigation } from 'react-navigation';
import { changeUserLocation } from '../store/actions/formActions';
import Colors from '../Colors/Colors';
// הנדל errMsg
const MapScreen = ({ navigation, onSelectedLocation, locationCoords }) => {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [errMsg, setErrMsg] = useState();
  const [selectedlocation, setSlectedLocation] = useState(false);
  useEffect(() => {
    getLocationAsync();
  }, []);
  const getLocationAsync = async () => {
    const status = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setErrMsg(
        'Permission to access location was denied',
      );
    }

    const currentlocation = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest
    });

    
    setLatitude(currentlocation.coords.latitude);
    setLongitude(currentlocation.coords.longitude);
  };

  const selectLocationHandler = (event) => {
    onSelectedLocation(event.nativeEvent.coordinate.latitude, event.nativeEvent.coordinate.longitude);
    setLatitude(event.nativeEvent.coordinate.latitude);
    setLongitude(event.nativeEvent.coordinate.longitude);
    setSlectedLocation(event.nativeEvent.coordinate);
  };

  let markerCoordinates = false;
  if (selectedlocation) {
    markerCoordinates = {
      latitude: selectedlocation.latitude,
      longitude: selectedlocation.longitude
    };
  }

  const SaveLocationHandler = () => {
    onSelectedLocation(selectedlocation.latitude, selectedlocation.longitude);
    navigation.navigate('Dvir', { longtitude: selectedlocation.longitude, latitude: selectedlocation.latitude });
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {latitude && longitude
          ? (
            <MapView
              onPress={selectLocationHandler}
              style={styles.mapStyle}
              initialRegion={{
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >

              {locationCoords.longitude
                ? <Marker title="Picked Location" coordinate={locationCoords} />
                : selectedlocation && (<Marker title="Picked Location" coordinate={markerCoordinates} />)}
            </MapView>
          )
          : <Text>wait...</Text>}
      </View>
      <View>
        {!selectedlocation ? <Text style={styles.mapGuildText}>Place select your location</Text>
          : <Button onPress={() => SaveLocationHandler()} title="Save Your Location" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  mapGuildText: {
    fontSize: 20,
    color: Colors.accent,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    bottom: 10
  },
  // btnStyle: {
  //   color: Colors.primary,
  //   borderRadius: 20,
  //   fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  // }
});

const mapStateToProps = (state) => {
  return {
    locationCoords: state.form.locationDetails.coords
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectedLocation: (latitude, longitude) => dispatch(changeUserLocation(latitude, longitude))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(MapScreen));