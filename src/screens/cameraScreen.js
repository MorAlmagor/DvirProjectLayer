import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { connect } from 'react-redux';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { setUserImage } from '../store/actions/formActions';
import MainButton from '../components/UI/Buttons/MainButton';
import Colors from '../Colors/Colors';

const CameraScreen = ({
  navigation,
  onSetImage
}) => {
  const [permissions, setPermissions] = useState({ camera: null, cameraRoll: null });


  const getPermissions = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
      const checkedStatus = status === 'granted';
      setPermissions({ camera: checkedStatus, cameraRoll: checkedStatus });
    } catch (error) {
      // console.error('Error');
    }
  };

  useEffect(() => {
    getPermissions();
  }, []);

  const openCamRoll = async () => {
    if (permissions.cameraRoll) {
      const { cancelled, base64 } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        base64: true,
        allowsMultipleSelection: false
      });
      if (!cancelled) {
        const base64Image = `data:image/png;base64,${base64}`;
        onSetImage(base64Image);
        navigation.navigate('Dvir');
      }
    }
  };

  const openCam = async () => {
    if (permissions.camera) {
      const { cancelled, base64 } = await ImagePicker.launchCameraAsync({
        base64: true,
        allowsEditing: false,
      });

      if (!cancelled) {
        const base64Image = `data:image/png;base64,${base64}`;
        onSetImage(base64Image);
        navigation.navigate('Dvir');
      }
    }
  };

  return (
   
    <View style={styles.container}>
      <View>
        <Text style={styles.userText}>Please Take Picture Of The Front Of Your Vehicle</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <MainButton onpress={openCam}>{<FontAwesome name="camera" size={30} />}</MainButton>
      </View>

      <View >
        <Text style={styles.divaider}>─────  or  ─────</Text>
      </View>

      <View style={styles.container1}>
        <View>
          <Text style={styles.userText}>Select A Photo from your Gallery</Text>
        </View >
        <View style={styles.buttonsContainer1}>
          <MainButton onpress={openCamRoll}>{<FontAwesome name="image" size={30} />}</MainButton>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    height: '10%',
    justifyContent: 'space-around',
    marginBottom: '10%',
    paddingVertical: '10%'
  },
  container: {
    alignItems: 'center',
    marginTop: '25%'
  },
  container1: {
    alignItems: 'center',
    marginBottom: '12%'
  },
  buttonsContainer1: {
    justifyContent: 'space-around',
  },
  userText: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 18,
    color: 'grey',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  divaider: {
    fontSize: 20,
    textAlign: 'center',
    color: 'grey',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    marginBottom: '10%'
    },
    image: {
      alignItems: 'center',
      marginTop: '10%',
      borderRadius: 10
    }
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSetImage: (imageBase64) => dispatch(setUserImage(imageBase64))
  };
};

export default connect(null, mapDispatchToProps)(CameraScreen);