/* eslint-disable no-else-return */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';
import CheckList from './CheckList';

const FormSection = ({ sectionInfo }) => {
  const [expandSection, setExpandSection] = useState(false);
  const { title, checkList } = sectionInfo;
  if (title === 'Trailer NO.2' || title === 'Trailer NO.1') {
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
        {expandSection && <CheckList SectionTitle={title} List={checkList} />}
      </View>
    );
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
        {expandSection && <CheckList SectionTitle={title} List={checkList} />}
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

export default FormSection;