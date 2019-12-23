import React, { useState } from 'react';
import {
  FlatList,
  View,
  TextInput,
  StyleSheet,
  Platform
} from 'react-native';
import TruckList from '../components/UI/MapReturnSection/TruckList';

const SelectTruckScreen = ({ navigation }) => {
  //


  const [textInputlangth, setTextInputlangth] = useState(0);
  const [textInput, setTextInput] = useState('');
  const [truckList] = useState(
    [
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
    ]
  );

  let TrucklistToShow = null;
  if (textInputlangth > 1) {
    const updateTruckList = [];
    for (let i = 0; i < truckList.length; i += 1) {
      const tempFilter = truckList[i].licenceNum.indexOf(textInput);
      if (tempFilter !== -1) {
        updateTruckList.push(truckList[i]);
      }
    }
    //
    TrucklistToShow = (
      <FlatList
        keyExtractor={(truckNo) => truckNo.licenceNum}
        data={updateTruckList}
        renderItem={({ item }) => {
          return <TruckList truckNum={item.licenceNum} nav={navigation} />;
        }}
      />
    );
  }

  const inputHandler = (inputText) => {
    const textLang = inputText.toUpperCase();
    textLang.split('');
    setTextInputlangth(textLang.length);
    setTextInput(textLang);
  };


  return (
    <View>
      <TextInput
        placeholderTextColor="grey"
        style={styles.inputC}
        value={textInput}
        autoCorrect={false}
        onChangeText={(text) => inputHandler(text)}
      />
      {TrucklistToShow}
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

export default SelectTruckScreen;