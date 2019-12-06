/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable consistent-return */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import MainButton from '../Buttons/MainButton';
import Colors from '../../../Colors/Colors';

const DvirSummeryModal = ({
  clean,
  modalshowHandler,
  truckStatus,
  trailer1Status,
  trailer2Status,
  trailer1Valid,
  trailer2Valid
}) => {
  //
  let trailersStatusSummery = null;
  if (trailer1Valid === null) {
    trailersStatusSummery = (
      <View>
        <Text style={styles.trailerNoFaultsText}>No Trailer Add to Truck</Text>
      </View>
    );
  } else if (trailer1Valid !== null && trailer2Valid === null) {
    const trailer1ArreyKeys = Object.keys(trailer1Status);
    const trailer1Faults = [];
    for (let i = 1; i < trailer1ArreyKeys.length; i += 1) {
      if (trailer1Status[trailer1ArreyKeys[i]].status === false) {
        trailer1Faults.push(trailer1Status[trailer1ArreyKeys[i]].keyId);
      }
    }
    trailersStatusSummery = (
      <View>
        <Text style={styles.trailerNoFaultsText}>Trailer NO {trailer1Valid}</Text>
        {trailer1Faults.length === 0
          ? <Text style={styles.trailerNoFaultsText}>No Faults Reported</Text>
          : <View>
            <Text style={styles.trailerFaultsText}>Trailer Faults Reported</Text>
            {trailer1Faults.map((fault) => <Text style={styles.trailerFaults} key={fault}>{fault}</Text>)}
          </View>}
      </View>
    );
  } else if (trailer1Valid !== null && trailer2Valid !== null) {
    const trailer1ArreyKeys = Object.keys(trailer1Status);
    const trailer1Faults = [];
    for (let i = 1; i < trailer1ArreyKeys.length; i += 1) {
      if (trailer1Status[trailer1ArreyKeys[i]].status === false) {
        trailer1Faults.push(trailer1Status[trailer1ArreyKeys[i]].keyId);
      }
    }
    const trailer2ArreyKeys = Object.keys(trailer2Status);
    const trailer2Faults = [];
    for (let i = 1; i < trailer2ArreyKeys.length; i += 1) {
      if (trailer2Status[trailer2ArreyKeys[i]].status === false) {
        trailer2Faults.push(trailer2Status[trailer2ArreyKeys[i]].keyId);
      }
    }
    trailersStatusSummery = (
      <View>
        <View>
          <Text style={styles.trailerNoFaultsText}>Trailer NO {trailer1Valid}</Text>
          {trailer1Faults.length === 0
            ? <Text style={styles.trailerNoFaultsText}>No Faults Reported</Text>
            : <View>
              <Text style={styles.trailerFaultsText}>Trailer Faults Reported</Text>
              {trailer1Faults.map((fault) => <Text style={styles.trailerFaults} key={fault}>{fault}</Text>)}
            </View>}
        </View>
        <View>
          <Text style={styles.trailerNoFaultsText}>Trailer NO {trailer2Valid}</Text>
          {trailer2Faults.length === 0
            ? <Text style={styles.trailerNoFaultsText}>No Faults Reported</Text>
            : <View>
              <Text style={styles.trailerFaultsText}>Trailer Faults Reported</Text>
              {trailer2Faults.map((fault) => <Text style={styles.trailerFaults} key={fault}>{fault}</Text>)}
            </View>}
        </View>

      </View>
    );
  }

  const trailer1ArreyKeys = Object.keys(trailer1Status);
  const trailer1Faults = [];
  for (let i = 1; i < trailer1ArreyKeys.length; i += 1) {
    if (trailer1Status[trailer1ArreyKeys[i]].status === false) {
      trailer1Faults.push(trailer1Status[trailer1ArreyKeys[i]].keyId);
    }
  }
  const trailer2ArreyKeys = Object.keys(trailer2Status);
  const trailer2Faults = [];
  for (let i = 1; i < trailer2ArreyKeys.length; i += 1) {
    if (trailer2Status[trailer2ArreyKeys[i]].status === false) {
      trailer2Faults.push(trailer2Status[trailer2ArreyKeys[i]].keyId);
    }
  }
  const ans = [];
  const ansToCheck = [];

  Object.keys(truckStatus).map((key) => {
    return ansToCheck.push({ name: truckStatus[key].keyId, status: truckStatus[key].status });
  });
  for (let i = 0; i < ansToCheck.length; i += 1) {
    if (!ansToCheck[i].status) {
      ans.push(ansToCheck[i].name);
    }
  }
  if (ans.length > 0 || trailer1Faults.length > 0 || trailer2Faults.length > 0) {
    return (
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Text style={styles.noFaultsText}>Reported fault summary</Text>
          <View>
            {ans.map((fault) => <Text style={styles.trailerFaults} key={fault}>{fault}</Text>)}
          </View>
          {trailersStatusSummery}
          <View style={styles.buttonsView}>
            <MainButton onpress={() => clean()}>I Confirm</MainButton>
          </View>
          <View style={styles.buttonsView}>
            <MainButton onpress={() => modalshowHandler(false)}>Go back</MainButton>
          </View>
        </View>
      </View>
    );
  }
  if (ans.length === 0 && trailer1Faults.length === 0 && trailer2Faults.length === 0) {
    return (
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Text style={styles.noFaultsText}>There is no faults found, Drive Carefully</Text>
          {trailersStatusSummery}
          <View style={styles.imageContainer}>
            <Image style={styles.Image} source={require('../../../../assets/SteeringWheel.png')} />
          </View>
          <View style={styles.buttonsView}>
            <MainButton onpress={() => clean()}>Ok</MainButton>
          </View>
          <View style={styles.buttonsView}>
            <MainButton onpress={() => modalshowHandler(false)}>Go back</MainButton>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  modal: {
    alignContent: 'flex-end',
    backgroundColor: 'white',
    width: '87%',
    padding: '10%',
    zIndex: 500,
    top: '7%',
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 2,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  buttonsView: {
    bottom: 15,
    top: 5
  },
  noFaultsText: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '400',
    color: Colors.primary,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  trailerNoFaultsText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  trailerFaultsText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: Colors.accent,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  trailerFaults: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: Colors.accent,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  imageContainer: {
    alignItems: 'center',
    margin: '5%'

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

const mapStateToProps = (state) => {
  return {
    truckStatus: state.form.truckStatus,
    trailer1Valid: state.form.trailer1.trailerNumber,
    trailer2Valid: state.form.trailer2.trailerNumber,
    trailer1Status: state.form.trailer1,
    trailer2Status: state.form.trailer2,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };


export default connect(mapStateToProps, null)(DvirSummeryModal);