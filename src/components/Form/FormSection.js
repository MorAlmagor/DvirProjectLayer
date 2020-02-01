/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable prefer-template */
/* eslint-disable no-else-return */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';
import { ExpandSectionTrailer1, ExpandSectionTrailer2, updateTrailerTitle } from '../../store/actions/appUiActions';
import CheckList from './CheckList';
import Colors from '../../Colors/Colors';

const FormSection = ({
  sectionInfo,
  trailer1Valid,
  trailer2Valid,
  trailer1ExpendSctionBool,
  trailer2ExpendSctionBool,
  setExpandSectionTrailer1,
  setExpandSectionTrailer2,
  onSetTrailerTitle,
  navigation
}) => {
  const [expandSection, setExpandSection] = useState(false);
  const { title, checkList } = sectionInfo;
  

  const navigateToAddTrailer = (trailerTitle) => {
    onSetTrailerTitle(trailerTitle);
    navigation.navigate('SelectTrailer');
  };

  if (title === 'Trailer NO.1') {
    return (
      <View style={styles.section}>
        {trailer1Valid

          ? <View>
            <TouchableOpacity onPress={() => setExpandSectionTrailer1((prevState) => !prevState)}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                  {title}
                  <Text style={{ fontSize: 17, color: Colors.primary }}>
                    {' ' + trailer1Valid}
                  </Text>
                </Text>
                <Text style={{ ...styles.sectionTitle, color: '#25282A' }}>{trailer1ExpendSctionBool ? '-' : '+'}</Text>
              </View>
            </TouchableOpacity>
            {trailer1ExpendSctionBool && <CheckList navigation={navigation} SectionTitle={title} List={checkList} />}
          </View>

          : <TouchableOpacity onPress={() => navigateToAddTrailer(title)}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                {title}
                <Text style={{ fontSize: 17, color: Colors.primary }}> Click to Add Trailer</Text>
              </Text>
              <Text style={{ ...styles.sectionTitle, color: '#25282A' }}>{expandSection ? '-' : '+'}</Text>
            </View>
          </TouchableOpacity>}
      </View>
    );
  } else if (title === 'Trailer NO.2') {
    if (trailer1Valid && !trailer2Valid) {
      return (
        <View style={styles.section}>
          <TouchableOpacity onPress={() => navigateToAddTrailer(title)}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                {title}
                <Text style={{ fontSize: 17, color: Colors.primary }}> Click to add Trailer</Text>
              </Text>
              <Text style={{ ...styles.sectionTitle, color: '#25282A' }}>{expandSection ? '-' : '+'}</Text>
            </View>
          </TouchableOpacity>
          {expandSection && <CheckList navigation={navigation} SectionTitle={title} List={checkList} />}
        </View>
      );
    } else if (trailer1Valid && trailer2Valid) {
      return (
        <View style={styles.section}>
          <TouchableOpacity onPress={() => setExpandSectionTrailer2()}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                {title}
                <Text style={{ fontSize: 17, color: Colors.primary }}>{' ' + trailer2Valid}</Text>
              </Text>
              <Text style={{ ...styles.sectionTitle, color: '#25282A' }}>{trailer2ExpendSctionBool ? '-' : '+'}</Text>
            </View>
          </TouchableOpacity>
          {trailer2ExpendSctionBool && <CheckList navigation={navigation} SectionTitle={title} List={checkList} />}
        </View>
      );
    } else {
      return null;
    }
  } else {
    return (
      <View style={styles.section}>
        <TouchableOpacity onPress={() => setExpandSection((prevState) => !prevState)}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {title}
            </Text>
            <Text style={{ ...styles.sectionTitle, color: '#25282A' }}>{expandSection ? '-' : '+'}</Text>
          </View>
        </TouchableOpacity>
        {expandSection && <CheckList navigation={navigation} SectionTitle={title} List={checkList} />}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 18,
    marginVertical: 12,
    paddingHorizontal: 6,
    top: 8,
    borderBottomWidth: 1,
    width: '90%'
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 2
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    bottom: 4,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },


});

const mapStateToProps = (state) => {
  return {
    trailer1Valid: state.form.trailer1.trailerNumber,
    trailer2Valid: state.form.trailer2.trailerNumber,
    trailer1ExpendSctionBool: state.appUI.trailer1ExpendSction,
    trailer2ExpendSctionBool: state.appUI.trailer2ExpendSction
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setExpandSectionTrailer1: () => dispatch(ExpandSectionTrailer1()),
    setExpandSectionTrailer2: () => dispatch(ExpandSectionTrailer2()),
    onSetTrailerTitle: (title) => dispatch(updateTrailerTitle(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSection);