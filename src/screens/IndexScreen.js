import React from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
} from 'react-native';
import MainButton from '../components/UI/Buttons/MainButton';

const IndexScreen = ({ userName, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.userNameText}>
        Hello {userName}
      </Text>
      <View style={styles.buttonsContainer}>
        <MainButton onpress={() => navigation.navigate('Camera')}>Pre-Trip</MainButton>
        <MainButton onpress={() => navigation.navigate('Camera')}>Post-Trip</MainButton>
        <MainButton onpress={() => alert('comming Soon')}>Old-Reports</MainButton>
      </View>
      </View>
  );
};
const styles = StyleSheet.create({
  buttonsContainer: {
    height: '50%',
    justifyContent: 'space-around',
    marginTop: '25%'
  },
  container: {
    alignItems: 'center',
    marginTop: '10%'
  },
  userNameText: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    color: '#222830',
    top: '15%'
  },
  image: {
    alignItems: 'center',
    marginBottom: '5%',
    borderRadius: 10
    // bottom: Dimensions.get('window').height < 500 ? 100 : 180
  }
});

IndexScreen.defaultProps = {
  userName: 'Yaron'
};

export default IndexScreen;
