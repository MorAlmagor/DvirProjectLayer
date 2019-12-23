import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  AsyncStorage,
  Button
} from 'react-native';

const TestScreen = () => {
  //

  // const blaa = async () => {
  //   const userData = await AsyncStorage.getItem('userData');
  //   const transformData = JSON.parse(userData);
  // };
  return (
    <View>
      <Text>smvsmv</Text>
      <Button title="dvsvsd" onPress={() => blaa()} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginVertical: 12,
    marginLeft: 12,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'flex-start',
    marginVertical: 12,
    marginLeft: 12,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  inputC: {
    marginTop: 15,
    height: 40,
    width: 180,
    padding: 12,
    top: 14,
    marginVertical: 4,
    marginLeft: 10,
    borderColor: '#aa0061',
    borderWidth: 1,
    borderRadius: 26,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  input: {
    alignItems: 'center'
  }
});

// const mapStateToProps = (state) => {

// }

export default TestScreen;