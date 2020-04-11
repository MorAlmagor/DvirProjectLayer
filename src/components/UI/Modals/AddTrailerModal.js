import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import ModalsButton from '../Buttons/ModalsButton';
import Colors from '../../../Colors/Colors';
import { changeModalShow, ExpandSectionTrailer1, ExpandSectionTrailer2 } from '../../../store/actions/appUiActions';
// import { updateTrailer1Number, updateTrailer2Number } from '../../../store/actions/formActions';


const AddTrailerModal = ({
  trailerTitle,
  closeTrailerModal,
  saveTrailer1,
  saveTrailer2,
  setExpandSectionTrailer1,
  setExpandSectionTrailer2
}) => {
  const [trailer1, setTrailer1] = useState('');
  const [trailer2, setTrailer2] = useState('');

  const saveNum = () => {
    if (trailerTitle === 'Trailer NO.1') {
      saveTrailer1(trailer1);
      closeTrailerModal();
      setExpandSectionTrailer1();
    } else {
      saveTrailer2(trailer2);
      closeTrailerModal();
      setExpandSectionTrailer2();
    }
  };

  if (trailerTitle === 'Trailer NO.1') {
    return (
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Text style={styles.noFaultsText}>{trailerTitle}</Text>
          <View style={{}}>
            <TextInput
              onChangeText={(text) => setTrailer1(text)}
              placeholder="Enter Trailer Number"
              // value={trailer1}
              placeholderTextColor="grey"
              style={styles.input}
              autoCorrect={false}
            />
          </View>
          <View style={styles.buttonsRow}>
            <View style={styles.buttonsView}>
              <ModalsButton onpress={() => saveNum()}>Save Number</ModalsButton>
            </View>
            <View style={styles.buttonsView}>
              <ModalsButton onpress={() => closeTrailerModal()}>Go back</ModalsButton>
            </View>
          </View>
        </View>
      </View>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return (
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Text style={styles.noFaultsText}>{trailerTitle}</Text>
          <View>
            <TextInput
              onChangeText={(text) => setTrailer2(text)}
              placeholder="Enter Trailer Number"
              value={trailer2}
              placeholderTextColor="grey"
              style={styles.input}
              autoCorrect={false}
            />
          </View>
          <View style={styles.buttonsRow}>
            <View style={styles.buttonsView}>
              <ModalsButton onpress={() => saveNum()}>Save Number</ModalsButton>
            </View>
            <View style={styles.buttonsView}>
              <ModalsButton onpress={() => closeTrailerModal(false)}>Go back</ModalsButton>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  modal: {
    alignContent: 'center',
    position: 'absolute',
    backgroundColor: 'white',
    width: '87%',
    padding: '10%',
    zIndex: 500,
    top: '15%',
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 2,
    // fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto' אל תשני ביינתים
  },
  // buttonsRow: { מקריס אצלי את האפליקציה ????
  //   top: 15,
  //   paddingbottom: 15,
  //   justifyContent: 'space-around',
  //   flexDirection:'row',
  //   alignItems: 'center'
  // },
  buttonsView: {
    bottom: 10,
    top: 10,
    alignItems: 'center'
  },
  noFaultsText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '400',
    color: '#25282A',
    bottom: 10,
    // fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto', אל תשני ביינתים
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  imageContainer: {
    alignItems: 'center',
    margin: '5%'

  },
  backdrop: {
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    zIndex: 400,
    left: 0,
    top: 0,
    opacity: 0.9
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
    trailerTitle: state.appUI.trailerModalTitle,
    trailer1num: state.form.trailer1.trailerNumber,
    trailer2num: state.form.trailer2.trailerNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeTrailerModal: (demi) => dispatch(changeModalShow(demi)),
    // saveTrailer1: (trailer1) => dispatch(updateTrailer1Number(trailer1)),
    // saveTrailer2: (trailer2) => dispatch(updateTrailer2Number(trailer2)),
    setExpandSectionTrailer1: () => dispatch(ExpandSectionTrailer1()),
    setExpandSectionTrailer2: () => dispatch(ExpandSectionTrailer2())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddTrailerModal);