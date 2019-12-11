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

const DvirSummeryModal = ({
  truckStatus,
  trailer1Status,
  trailer2Status,
  trailer1Valid,
  trailer2Valid,
  navigation
}) => {
  const Odds = navigation.state.params;
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
    const chartConfig = {
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#EA0A8B',
      backgroundGradientTo: Colors.primary,
      decimalPlaces: 2, // optional, defaults to 2dp
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

    let dataTrucks;
    if (trailer1Valid === null && trailer2Valid === null) {
      dataTrucks = {
        labels: ['Truck', 'Total'],
        data: [
          Odds.truck.rafOdds / 100,
          Odds.total.rafOdds / 100
        ]
      };
    } else if (trailer1Valid !== null && trailer2Valid === null) {
      dataTrucks = {
        labels: ['Trailer#1', 'Truck', 'Total'],
        data: [
          Odds.tariler1.rafOdds / 100,
          Odds.truck.rafOdds / 100,
          Odds.total.rafOdds / 100
        ]
      };
    } else if (trailer1Valid !== null && trailer2Valid !== null) {
      dataTrucks = {
        labels: ['Trailer#2', 'Trailer#1', 'Truck', 'Total'],
        data: [
          Odds.tariler2.rafOdds / 100,
          Odds.tariler1.rafOdds / 100,
          Odds.truck.rafOdds / 100,
          Odds.total.rafOdds / 100
        ]
      };
    }

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
        <Text style={styles.noFaultsText}>Reported fault summary</Text>
        <ScrollView style={{ width: '100%' }}>
          <Text style={styles.noFaultsText}>Truck Faults</Text>
          <View>
            {ans.map((fault) => <Text style={styles.trailerFaults} key={fault}>{fault}</Text>)}
          </View>
          {trailersStatusSummery}
        </ScrollView>
        <View style={styles.buttonsView}>
          <MainButton onpress={() => navigation.goBack()}>Go back</MainButton>
        </View>
      </View>
    );
  }
  if (ans.length === 0 && trailer1Faults.length === 0 && trailer2Faults.length === 0) {
    const chartConfig = {
      backgroundColor: '#e26a00',
      backgroundGradientFrom: Colors.primary,
      backgroundGradientTo: Colors.primary,
      decimalPlaces: 2, // optional, defaults to 2dp
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
    let dataTrucks;
    if (trailer1Valid === null && trailer2Valid === null) {
      dataTrucks = {
        labels: ['Truck', 'Total'],
        data: [
          Odds.truck.rafOdds / 100,
          Odds.total.rafOdds / 100
        ]
      };
    } else if (trailer1Valid !== null && trailer2Valid === null) {
      dataTrucks = {
        labels: ['Trailer#1', 'Truck', 'Total'],
        data: [
          Odds.tariler1.rafOdds / 100,
          Odds.truck.rafOdds / 100,
          Odds.total.rafOdds / 100
        ]
      };
    } else if (trailer1Valid !== null && trailer2Valid !== null) {
      dataTrucks = {
        labels: ['Trailer#2', 'Trailer#1', 'Truck', 'Total'],
        data: [
          Odds.tariler2.rafOdds / 100,
          Odds.tariler1.rafOdds / 100,
          Odds.truck.rafOdds / 100,
          Odds.total.rafOdds / 100
        ]
      };
    }
    return (
      <View style={styles.backdrop}>
        <ProgressChart
          data={dataTrucks}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={chartConfig}
          hideLegend={false}
        />
        <Text style={styles.noFaultsText}>_________________________________</Text>
        <Text style={styles.noFaultsText}>There Is No Faults Found</Text>
        {trailersStatusSummery}
        {/* <View style={styles.imageContainer}> */}
        {/* <Image style={styles.Image} source={require('../../assets/SteeringWheel.png')} /> */}
        {/* </View> */}
        <View style={styles.buttonsView}>
          <MainButton onpress={() => navigation.goBack()}>Go back</MainButton>
        </View>
      </View>
    );
  }
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