/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable prefer-template */
/* eslint-disable no-else-return */
import React from 'react';
import { connect } from 'react-redux';
import { StackedBarChart } from 'react-native-svg-charts';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import MainButton from '../Buttons/MainButton';
import Colors from '../../../Colors/Colors';
import DvirSummeryButton from '../Buttons/DvirSummeryButton';
import FormSummeryAlertCard from '../Cards/FormSummeryAlertCard';

const DvirSummeryModal = ({
  navigation,
  clean,
  truckStatus,
  trailer1Status,
  trailer2Status,
  trailer1Valid,
  trailer2Valid,
  truckRaf,
  trailerRaf,
}) => {
  //

  const getSummery = (tempData, type) => {
    const tempDataArreyKeys = Object.keys(tempData);
    const tempFaults = [];
    let tempScore = 0;
    for (let i = 1; i < tempDataArreyKeys.length; i += 1) {
      if (tempData[tempDataArreyKeys[i]].status === false) {
        tempFaults.push(tempData[tempDataArreyKeys[i]].keyId);
        tempScore += tempData[tempDataArreyKeys[i]].Score;
      }
    }
    if (type) {
      const raf = truckRaf;
      const rafOdds = ((tempScore - raf) / raf) * -100;
      const faultsOdds = ((tempFaults.length - 43) / 43) * -100;
      const ans = {
        faultsArr: tempFaults,
        score: tempScore,
        faultsOdds,
        rafOdds
      };
      return ans;
    } else {
      const raf = trailerRaf;
      const rafOdds = ((tempScore - raf) / raf) * -100;
      const faultsOdds = ((tempFaults.length - 43) / 43) * -100;
      const ans = {
        faultsArr: tempFaults,
        score: tempScore,
        faultsOdds,
        rafOdds
      };
      return ans;
    }
  };

  const totalSummery = (
    trailer1Validation,
    trailer2Validation,
    truckSummery,
    tariler1Summery,
    tariler2Summery
  ) => {
    if (trailer1Validation === null) {
      const TotalRafOdds = truckSummery.rafOdds;
      const TotalFaultsOdds = truckSummery.faultsOdds;
      return {
        rafOdds: TotalRafOdds,
        faultsOdds: TotalFaultsOdds
      };
    } else if (trailer1Validation !== null && trailer2Validation === null) {
      const TotalRaf = truckRaf + trailerRaf;
      const TotalScore = truckSummery.score + tariler1Summery.score;
      const TotalFaults = truckSummery.length + tariler1Summery.length;
      const TotalRafOdds = ((TotalScore - TotalRaf) / TotalRaf) * -100;
      const TotalFaultsOdds = ((TotalFaults.length - 63) / 63) * -100;
      return {
        rafOdds: TotalRafOdds,
        faultsOdds: TotalFaultsOdds
      };
    } else if (trailer1Validation !== null && trailer2Validation !== null) {
      const TotalRaf = truckRaf + trailerRaf + trailerRaf;
      const TotalScore = truckSummery.score + tariler1Summery.score + tariler2Summery.score;
      const TotalFaults = truckSummery.length + tariler1Summery.length + tariler2Summery.length;
      const TotalRafOdds = ((TotalScore - TotalRaf) / TotalRaf) * -100;
      const TotalFaultsOdds = ((TotalFaults.length - 83) / 83) * -100;
      return {
        rafOdds: TotalRafOdds,
        faultsOdds: TotalFaultsOdds
      };
    }
  };

  const truckSummery = getSummery(truckStatus, true);
  const tariler1Summery = getSummery(trailer1Status, true);
  const tariler2Summery = getSummery(trailer2Status, true);
  const totalOddsSummery = totalSummery(trailer1Valid, trailer2Valid, truckSummery, tariler1Summery, tariler2Summery);


  const dataScoreSummery = [
    {
      rank: 100,
      test: 25,
      test2: 13
    },
    {
      rank: totalOddsSummery.rafOdds,
      test: 25,
      test2: 13
    },
    {
      rank: truckSummery.rafOdds,
      test: 25,
      test2: 13
    },
    {
      rank: trailer1Valid ? tariler1Summery.rafOdds : 0,
      test: trailer1Valid ? 25 : 1,
      test2: trailer1Valid ? 25 : 1

    },
    {
      rank: trailer2Valid ? tariler2Summery.rafOdds : 0,
      test: trailer2Valid ? 25 : 1,
      test2: trailer2Valid ? 25 : 1
    },
  ];

  const colors = [Colors.primary, '#b52d7b', '#ba5991'];
  const keys = ['rank', 'test', 'test2'];
  // truck renk

  return (
    <View style={styles.backdrop}>
      <View style={styles.modal}>
        <ScrollView>
          <View style={{ width: '100%', alignItems: 'center', marginVertical: 10 }}>
            <View style={{ width: '90%', height: 200 }}>
              <StackedBarChart
                style={{ height: 200 }}
                keys={keys}
                colors={colors}
                data={dataScoreSummery}
                contentInset={{ top: 30, bottom: 30 }}
              />
            </View>
            <View style={{ flexDirection: 'row', width: '90%', height: 40 }}>
              <Text style={styles.graphBar}>Full Rank</Text>
              <Text style={styles.graphBar}>Total Rank</Text>
              <Text style={styles.graphBar}>Truck</Text>
              <Text style={styles.graphBar}>Trailer 1</Text>
              <Text style={styles.graphBar}>Trailer 2</Text>
            </View>
            <DvirSummeryButton
              title="Total Rank"
              odds={totalOddsSummery.rafOdds.toFixed(0) + '%'}
              onpress={() => navigation.navigate('Faults', {
                truck: truckSummery,
                tariler1: tariler1Summery,
                tariler2: tariler2Summery,
                total: totalOddsSummery
              })}
            />
            <DvirSummeryButton
              title="Truck"
              odds={truckSummery.rafOdds.toFixed(0) + '%'}
              onpress={() => navigation.navigate('SemiFaults', { Sum: truckSummery, type: 'Truck' })}
            />
            {trailer1Valid && <DvirSummeryButton title="Trailer 1" odds={tariler1Summery.rafOdds.toFixed(0) + '%'} onpress={() => navigation.navigate('SemiFaults', { Sum: tariler1Summery, type: 'Trailer 1' })} />}
            {trailer2Valid && <DvirSummeryButton title="Trailer 2" odds={tariler2Summery.rafOdds.toFixed(0) + '%'} onpress={() => navigation.navigate('SemiFaults', { Sum: tariler2Summery, type: 'Trailer 2' })} />}
            <TouchableOpacity
              onPress={() => navigation.navigate('Faults', {
                truck: truckSummery,
                tariler1: tariler1Summery,
                tariler2: tariler2Summery,
                total: totalOddsSummery
              })}
            >
              <FormSummeryAlertCard
                tariler1Summery={tariler1Summery}
                tariler2Summery={tariler2Summery}
                truckSummery={truckSummery}
                truckRaf={truckRaf}
                trailerRaf={trailerRaf}
                trailer1Active={trailer1Valid}
                trailer2Active={trailer2Valid}
              />
            </TouchableOpacity>
            <View>
              <MainButton onpress={() => clean()}>
                Submit
              </MainButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  modal: {
    zIndex: 500,
    top: '2%',
    // fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  graphBar: {
    textAlign: 'center',
    width: '20%',
    bottom: '2%',
    color: Colors.primary
  },
  backdrop: {
    alignItems: 'center',
    alignContent: 'flex-end',
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    zIndex: 400,
    left: 0,
    top: 0,
  },
  alertGuildContainer: {
    alignItems: 'center',
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9
  },
  alertGuildText: {
    color: Colors.primary,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 15,
    fontSize: 17
  }

});

const mapStateToProps = (state) => {
  return {
    truckStatus: state.form.truckStatus,
    trailer1Valid: state.form.trailer1.trailerNumber,
    trailer2Valid: state.form.trailer2.trailerNumber,
    trailer1Status: state.form.trailer1,
    trailer2Status: state.form.trailer2,
    truckRaf: state.appUI.truckRaf,
    trailerRaf: state.appUI.trailerRaf,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

export default connect(mapStateToProps, null)(DvirSummeryModal);