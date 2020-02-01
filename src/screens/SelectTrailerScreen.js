/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  View,
  TextInput,
  StyleSheet,
  Platform,
  Text
} from 'react-native';
import TrailerList from '../components/UI/MapReturnSection/TrailerList';
import Colors from '../Colors/Colors';
import ModalsButton from '../components/UI/Buttons/ModalsButton';

const SelectTrailerScreen = ({
  navigation,
  trailerListData,
  trailerTitle,
  trailer1Number
}) => {
  //
  const [textxxx, setTextxxx] = useState('');
  const [textInputlangth, setTextInputlangth] = useState(0);
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    const textLang = textxxx.toUpperCase();
    setTextInput(textLang);
    const test = textLang.split('');
    setTextInputlangth(test.length);
  }, [textxxx]);

  let trailerListToShow = null;
  if (textInputlangth > 3) {
    const updateTrailerList = [];
    const trailerListKeys = Object.keys(trailerListData);
    for (let i = 0; i < trailerListKeys.length; i += 1) {
      const tempFilter = trailerListKeys[i].indexOf(textInput);
      if (!trailer1Number && !trailerListData[trailerListKeys[i]].onTrip && tempFilter !== -1) {
        updateTrailerList.push(trailerListData[trailerListKeys[i]]);
      } else if (trailer1Number !== trailerListKeys[i] && tempFilter !== -1 && !trailerListData[trailerListKeys[i]].onTrip) {
        updateTrailerList.push(trailerListData[trailerListKeys[i]]);
      }
    }

    trailerListToShow = (
      <FlatList
        keyExtractor={(trailer) => trailer.trailerNumber}
        data={updateTrailerList}
        renderItem={({ item }) => {
          return (
            <TrailerList
              trailerData={item}
              trailerNum={item.trailerNumber}
              trailerType={trailerTitle}
              nav={navigation}
            />
          );
        }}
      />
    );
  }

  return (
    <View style={styles.modal}>
      <Text style={styles.noFaultsText}>{trailerTitle}</Text>
      <View>
        <TextInput
          onChangeText={(text) => setTextxxx(text)}
          placeholder="Tap Your Trailer Licence Plate Here!"
          value={textInput}
          placeholderTextColor="grey"
          style={styles.input}
          autoCorrect={false}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        {trailerListToShow}
      </View>
      <View style={styles.buttonsRow}>
        <View style={styles.buttonsView}>
          <ModalsButton onpress={() => navigation.goBack()}>Go back</ModalsButton>
        </View>
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
    height: 50,
    width: 300,
    borderColor: '#aa0061',
    borderWidth: 1,
    borderRadius: 26,
    justifyContent: 'space-between',
    alignItems: 'center',
    // fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto', אל תשני ביינתים
    paddingVertical: 12,
    paddingHorizontal: 12
  },
});

const mapStateToProps = (state) => {
  return {
    trailerListData: state.trailers.trailers,
    trailerTitle: state.appUI.trailerModalTitle,
    trailer1Number: state.form.trailer1.trailerNumber
  };
};

export default connect(mapStateToProps, null)(SelectTrailerScreen);