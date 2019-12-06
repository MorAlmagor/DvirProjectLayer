/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React from 'react';
import AutoScrolling from 'react-native-auto-scrolling';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform
} from 'react-native';
import Colors from '../../../Colors/Colors';

const SpinerModal = () => {
  return (
    <View style={styles.backdrop}>
      <View style={styles.modal}>
        <View style={{ marginVertical: 20 }}>
          <AutoScrolling style={styles.scrolling1}>
            <Image
              style={styles.image}
              delay={0}
              source={require('../../../../assets/longTruck.png')}
            />
          </AutoScrolling>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 1150,
    height: 200
  },
  scrolling1: {
    height: 200,
    width: 400,
    marginBottom: 10
  },
  modal: {
    overflow: 'hidden',
    alignContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgb(253,253,253)',
    width: '87%',
    padding: '10%',
    zIndex: 500,
    top: '7%',
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 2,
    opacity: 1,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  backdrop: {
    alignItems: 'center',
    alignContent: 'flex-end',
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    zIndex: 400,
    left: 0,
    top: 0,
    opacity: 0.9
  }
});


export default SpinerModal;
