/* eslint-disable no-else-return */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import CheckSwitch from './CheckSwitch';
import { setTrailerTitle } from '../../store/actions/appUiActions';
import { removeTrailer1, removeTrailer2, updateTrailer1 } from '../../store/actions/formActions';

const CheckList = ({
  List,
  SectionTitle,
  onChangeTrailerTitleSection,
  navigation,
  trailer1valid,
  trailer2valid,
  onRemoveTrailer1,
  onRemoveTrailer2,
  trailers,
  onSwitchtrailer2toTrailer1

}) => {
//
  const editTrailerNumber = (title) => {
    onChangeTrailerTitleSection(title);
    navigation.navigate('SelectTrailer');
  };

  const deleteTrailer = (title) => {
    if (title === 'Trailer NO.1') {
      if (!trailer2valid) {
        askPremissionToDelete(
          'Are You Sure?',
          `You Are About To Delete \n Trailer NO. ${trailer1valid}`,
          () => onRemoveTrailer1()
        );
      } else {
        askPremissionToDelete(
          'Are You Sure?',
          `You Are About To Delete Trailer NO. ${trailer1valid} \n
          Trailer NO. ${trailer2valid} Will Move Automatecly To Trailer NO.1 Position`,
          () => SwitchTrailers()
        );
      }
    } else {
      askPremissionToDelete(
        'Are You Sure?',
        `You Are About To Delete \n
        Trailer NO. ${trailer2valid}`,
        () => onRemoveTrailer2()
      );
    }
  };
  const SwitchTrailers = () => {
    const trailersKeys = Object.keys(trailers);
    for (let i = 0; i < trailersKeys.length; i += 1) {
      if (trailersKeys[i] === trailer2valid) {
        onRemoveTrailer2();
        onRemoveTrailer1();
        onSwitchtrailer2toTrailer1(trailers[trailersKeys[i]]);
        alert('Trailer 1 delete, System Change Trailer NO.2 Position ');
        break;
      }
    }
  };

  // עדי זה מכוער אינעלהעולם כחול זה מגעיל לא מוכן להמשיך ככה יותר בחיים בי התאבדתי
  // כוסאמק השלמה אוטומטי שיט
  // לא צריך אלרט תזכרי!
  const askPremissionToDelete = (header, bodyText, okFunction,) => {
    Alert.alert(
      header,
      bodyText,
      [
        {
          text: 'Cancel',
          onPress: null,
          style: 'cancel',
        },
        { text: 'Delete', onPress: okFunction },
      ],
      { cancelable: false },
    );
  };

  if (SectionTitle === 'Trailer NO.1' || SectionTitle === 'Trailer NO.2') {
    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => editTrailerNumber(SectionTitle)}>
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
        <View>
          <TouchableOpacity onPress={() => deleteTrailer(SectionTitle)}>
            {/* לסדר UI */}
            <Text style={{ color: 'red' }}>
            remove {SectionTitle}
            </Text>
          </TouchableOpacity>
        </View>
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
    onChangeTrailerTitleSection: (SectionTitle) => dispatch(setTrailerTitle(SectionTitle)),
    onRemoveTrailer1: () => dispatch(removeTrailer1()),
    onRemoveTrailer2: () => dispatch(removeTrailer2()),
    onSwitchtrailer2toTrailer1: (trailer2Data) => dispatch(updateTrailer1(trailer2Data)),

  };
};

const mapStateToProps = (state) => {
  return {
    trailer1valid: state.form.trailer1.trailerNumber,
    trailer2valid: state.form.trailer2.trailerNumber,
    trailers: state.trailers.trailers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckList);
