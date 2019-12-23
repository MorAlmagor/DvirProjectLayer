import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';
import Colors from '../Colors/Colors';


const StartScreen = ({ navigation }) => {
//
  const dispatch = useDispatch();

  useEffect(async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (!userData) {
      navigation.navigate('Login');
    } else {
      const transformData = JSON.parse(userData);
      if (transformData.token === null) {
        navigation.navigate('Login');
      } else {
        const { token, userId, expirationDate } = transformData;
        const expiryDate = new Date(expirationDate);
        if (expiryDate <= new Date() || !token || !userId) {
          navigation.navigate('Login');
        } else {
          navigation.navigate('Index');
          dispatch(authActions.authenticate(token, userId));
        }
      }
    }
  }, []);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/bigLogo.png')}
          navigation={navigation}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: '100%',
    alignItems: 'center',
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').width * 1,
  },
  image: {
    alignItems: 'center',
    bottom: Dimensions.get('window').height < 500 ? 100 : 180,
  }
});

export default StartScreen;