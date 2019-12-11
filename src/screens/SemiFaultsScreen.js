/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable consistent-return */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  Dimensions,
  ScrollView
} from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { connect } from 'react-redux';
import MainButton from '../components/UI/Buttons/MainButton';
import Colors from '../Colors/Colors';

const SemiFaultsScreen = ({
  truckStatus,
  trailer1Status,
  trailer2Status,
  navigation
}) => {
  let tempToMap;
  const OddsObj = navigation.state.params.Sum;
  const type = navigation.state.params.type;
  if (type === 'Truck') {
    tempToMap = truckStatus;
  } else if (type === 'Trailer1') {
    tempToMap = trailer1Status;
  } else if (type === 'Trailer2') {
    tempToMap = trailer2Status;
  }

  const ArreyKeys = Object.keys(tempToMap);
  const ans = [];
  for (let i = 1; i < ArreyKeys.length; i += 1) {
    if (tempToMap[ArreyKeys[i]].status === false) {
      ans.push(tempToMap[ArreyKeys[i]].keyId);
    }
  }

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#EA0A8B',
    backgroundGradientTo: Colors.primary,
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726'
    }
  };

  const dataTrucks = {
    labels: ['score', 'Faults', 'Rank'],
    data: [
      (30 - OddsObj.score) / 100,
      OddsObj.faultsOdds / 100,
      OddsObj.rafOdds / 100,
    ]
  };


  return (
    <View style={styles.backdrop}>
      <View>
        <ProgressChart
          data={dataTrucks}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </View>
      <Text style={styles.noFaultsText}>__________________________</Text>
      <Text style={styles.noFaultsText}>{type}</Text>
      <Text style={styles.noFaultsText}>Reported fault summary</Text>
      <ScrollView>
        <View>
          {ans.map((fault) => <Text style={styles.trailerFaults} key={fault}>{fault}</Text>)}
        </View>
      </ScrollView>
      <View style={styles.buttonsView}>
        <MainButton onpress={() => navigation.goBack()}>Go back</MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    zIndex: 500,
    top: '7%',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  buttonsView: {
    bottom: 15,
    top: 5
  },
  noFaultsText: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  trailerNoFaultsText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  trailerFaultsText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
  trailerFaults: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
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
    backgroundColor: Colors.primary,
    alignItems: 'center',
    alignContent: 'flex-end',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 400,
    left: 0,
    top: 0,
  }
});

const mapStateToProps = (state) => {
  return {
    truckStatus: state.form.truckStatus,
    trailer1Status: state.form.trailer1,
    trailer2Status: state.form.trailer2,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };


export default connect(mapStateToProps, null)(SemiFaultsScreen);