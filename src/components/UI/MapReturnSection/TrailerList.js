/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { ExpandSectionTrailer1, ExpandSectionTrailer2 } from '../../../store/actions/appUiActions';
import { updateTrailer1, updateTrailer2 } from '../../../store/actions/formActions';
import Colors from '../../../Colors/Colors';

const TrailerList = ({
  onSelectTrailer1,
  onSelectTrailer2,
  onSetExpandSectionTrailer1,
  onSetExpandSectionTrailer2,
  trailerData,
  trailerTitle,
  nav
}) => {
  const trailerSelectedHandler = (title) => {
    if (title === 'Trailer NO.1') {
      onSelectTrailer1(trailerData);
      onSetExpandSectionTrailer1();
      nav.navigate('Dvir');
    } else {
      onSelectTrailer2(trailerData);
      onSetExpandSectionTrailer2();
      nav.navigate('Dvir');
    }
  };

  return (
    <TouchableOpacity onPress={() => trailerSelectedHandler(trailerTitle)}>
      <View style={styles.container}>
        <Text style={styles.numText}>Trailer Plate: {trailerData.trailerNumber}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    
    width: '100%',
    height: 50,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 2
    
  },
  numText: {
    textAlign: 'center',
    marginTop: 6,
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.primary
  }

});
const mapStateToProps = (state) => {
  return {
    trailerTitle: state.appUI.trailerModalTitle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectTrailer1: (trailerData) => dispatch(updateTrailer1(trailerData)),
    onSelectTrailer2: (trailerData) => dispatch(updateTrailer2(trailerData)),
    onSetExpandSectionTrailer1: () => dispatch(ExpandSectionTrailer1()),
    onSetExpandSectionTrailer2: () => dispatch(ExpandSectionTrailer2()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailerList);
