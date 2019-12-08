/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  AsyncStorage,
  Button
} from 'react-native';
import Colors from '../Colors/Colors';

const TestScreen = (props) => {
  const initial = [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
  ];

  initial.splice(1, 1);
  // console.log(initial)
  
 
  return (
    <View style={{}}>
      <Text>test screen</Text>
  
    </View>
  );
};

const styles = StyleSheet.create({
  
});


export default TestScreen;
