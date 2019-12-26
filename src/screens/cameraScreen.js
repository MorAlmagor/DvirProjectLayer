/* eslint-disable no-else-return */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-template */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import base64 from 'react-native-base64';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { setUserImage, setTruckNumber } from '../store/actions/formActions';
import MainButton from '../components/UI/Buttons/MainButton';
import SpinerModal from '../components/UI/Spiner/SpinerModal';

const CameraScreen = ({
  navigation,
  onSetImage,
  onSaveTruckNumber
}) => {
  const [permissions, setPermissions] = useState({ camera: null, cameraRoll: null });
  const [uguuKeyLink, setUguuKeyLink] = useState(false);
  const [loading, setLoading] = useState(false);

  ///// demi ////
  const demiTrucksState = [
    {
      licenceNum: '4R55T4S5R4T',
      onTrip: false,
    },
    {
      licenceNum: '4Y44R4S4FG4',
      onTrip: false,
    },
    {
      licenceNum: '2W31G35E4RD',
      onTrip: false,
    },
    {
      licenceNum: '432G123S524G',
      onTrip: false,
    },
    {
      licenceNum: '15SR63G15GG',
      onTrip: false,
    },
    {
      licenceNum: '18SR63G19GG',
      onTrip: false,
    },
    {
      licenceNum: 'KIAPET',
      onTrip: false,
    },
    {
      licenceNum: '6XSU832',
      onTrip: false,
    },
  ];
  //////////////

  if (uguuKeyLink) {
    const uguuLinkEncode = base64.encode(uguuKeyLink);
    const aiBotLink = 'http://31.220.62.151:1880/lprclassifier/';
    const linkToFatch = aiBotLink + uguuLinkEncode;
    // const tests = axios({
    //   method: 'get',
    //   url: linkToFatch,
    // });
    // tests.then((res) => validTruckNumFromImage(res.data.plate));
    const tests = axios.get(linkToFatch)
      .catch((error) => {
        if (error) {
          setLoading(false);
          setUguuKeyLink(false);
          navigation.navigate('SelectTruck');
          alert('Sorry the system did not recognize your vehicle');
        }
      });
    tests.then((res) => validTruckNumFromImage(res.data.plate));
  }

  const validTruckNumFromImage = (truckNum) => {
    let validBool = false;
    for (let i = 0; i < demiTrucksState.length; i += 1) {
      if (truckNum === demiTrucksState[i].licenceNum) {
        onSaveTruckNumber(demiTrucksState[i].licenceNum);
        validBool = true;
      }
    }
    navigate(validBool);
  };

  const navigate = (bool) => {
    if (bool) {
      setLoading(false);
      setUguuKeyLink(false);
      navigation.navigate('Dvir');
      alert('System recognize your vehicle Successfully');
    } else {
      setLoading(false);
      setUguuKeyLink(false);
      navigation.navigate('SelectTruck');
      alert('Sorry the system did not recognize your vehicle');
    }
  };

  const getPermissions = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
      if (status === 'undetermined') {
        alert('Permission To Access Camera Was Denied \n Please Allow Camera Permission To Continue');
        navigation.navigate('Index');
      } else {
        const checkedStatus = status === 'granted';
        setPermissions({ camera: checkedStatus, cameraRoll: checkedStatus });
      }
    } catch (error) {
      // console.error('Error');
    }
  };

  useEffect(() => {
    getPermissions();
  }, []);

  const openCamRoll = async () => {
    if (permissions.cameraRoll) {
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        allowsMultipleSelection: false,
        uri: true,
      });
      if (!cancelled) {
        const base64Image = `data:image/png;base64,${base64}`;
        onSetImage(base64Image);
        const formData = new FormData();
        formData.append('file', { uri, name: 'picture.jpg', type: 'image/jpg' });
        const response = await axios.post('https://uguu.se/api.php?d=upload-tool', formData, {
          responseType: 'text',
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });
        const test = response.data;
        setUguuKeyLink(test + '');
        setLoading(true);
      }
    }
  };

  const openCam = async () => {
    if (permissions.camera) {
      const { cancelled, uri } = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        uri: true,
      });

      if (!cancelled) {
        const base64Image = `data:image/png;base64,${base64}`;
        onSetImage(base64Image);
        const formData = new FormData();
        formData.append('file', { uri, name: 'picture.jpg', type: 'image/jpg' });
        const response = await axios.post('https://uguu.se/api.php?d=upload-tool', formData, {
          responseType: 'text',
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });
        const test = response.data;
        setUguuKeyLink(test + '');
        setLoading(true);
      }
    }
  };

  if (!loading) {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.userText}>Please Take Picture Of The Front Of Your Vehicle</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <MainButton onpress={openCam}><FontAwesome name="camera" size={30} /></MainButton>
        </View>

        <View>
          <Text style={styles.divaider}>─────  or  ─────</Text>
        </View>

        <View style={styles.container1}>
          <View>
            <Text style={styles.userText}>Select A Photo from your Gallery</Text>
          </View>
          <View style={styles.buttonsContainer1}>
            <MainButton onpress={openCamRoll}><FontAwesome name="image" size={30} /></MainButton>
          </View>

        </View>
      </View>
    );
  } else {
    return (
      <SpinerModal />
    );
  }
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
    onSetImage: (imageBase64) => dispatch(setUserImage(imageBase64)),
    onSaveTruckNumber: (truckNum) => dispatch(setTruckNumber(truckNum))
  };
};

export default connect(null, mapDispatchToProps)(CameraScreen);