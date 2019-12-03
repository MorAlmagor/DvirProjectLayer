/* eslint-disable no-else-return */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import CheckSwitch from './CheckSwitch';
import { openTrailerModal } from '../../store/actions/appUiActions';

const CheckList = ({ List, SectionTitle, openTrailerEdit }) => {
  if (SectionTitle === 'Trailer NO.1' || SectionTitle === 'Trailer NO.2') {
    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => openTrailerEdit(SectionTitle)}>
            <Text>
            Tap To Edit {SectionTitle} Number
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={List}
          keyExtractor={(checkItem) => checkItem.keyId}
          renderItem={({ item }) => {
            return (
              <View style={styles.checkList}>
                <Text style={{ maxWidth: '70%' }}>{item.text}</Text>
                <CheckSwitch SectionTitle={SectionTitle} checkStatus={item} />
              </View>
            );
          }}
        />
      </View>
    );
  } else {
    return (
      <FlatList
        data={List}
        keyExtractor={(checkItem) => checkItem.keyId}
        renderItem={({ item }) => {
          return (
            <View style={styles.checkList}>
              <Text style={{ maxWidth: '70%' }}>{item.text}</Text>
              <CheckSwitch SectionTitle={SectionTitle} checkStatus={item} />
            </View>
          );
        }}
      />
    );
  }
};

const styles = StyleSheet.create({
  checkList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    openTrailerEdit: (SectionTitle) => dispatch(openTrailerModal(SectionTitle))
  };
};

export default connect(null, mapDispatchToProps)(CheckList);
