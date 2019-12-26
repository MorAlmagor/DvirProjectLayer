import React, { useState } from 'react';
import {
  FlatList,
  View,
  TextInput,
  StyleSheet,
  Platform,
  Text
} from 'react-native';
import TruckList from '../components/UI/MapReturnSection/TruckList';
import Colors from '../Colors/Colors';

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
    <View style={{ alignItems: 'center' }}>
      <View>
        <Text style={styles.titleStyle}>Please type Your Vehicle Licence Plate</Text>
      </View>
      <View>
        <TextInput
          placeholderTextColor="grey"
          placeholder="Tap Your Vehicle Licence Plate Here!"
          style={styles.inputC}
          value={textInput}
          autoCorrect={false}
          onChangeText={(text) => inputHandler(text)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        {TrucklistToShow}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 20,
    fontSize: 20,
    color: Colors.primary,
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
    height: 50,
    width: '90%',
    padding: 12,
    top: 14,
    borderColor: '#aa0061',
    borderWidth: 1,
    borderRadius: 26,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  input: {
    alignItems: 'center'
  }
});

// const mapStateToProps = (state) => {

// }

export default SelectTruckScreen;