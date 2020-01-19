/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import axios from 'axios';
import { useDispatch, connect } from 'react-redux';
import * as authActions from '../store/actions/auth';
import Colors from '../Colors/Colors';
import { setUserData } from '../store/actions/userAction';
import { setTruckList } from '../store/actions/trucksAction';
import { setTrailerList } from '../store/actions/trailersAction';


const StartScreen = ({
  navigation,
  onUpdateUserData,
  onUpdateTrucklist,
  onUpdateTrailerlist,
}) => {
  //
  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.getItem('userData').then((userData) => {
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
            axios.get(`https://dvir-project-server.firebaseio.com/users/-Lyk-7s4l6Eugje0wzNp.json?auth=${token}`)
              .then((res) => {
                const users = res.data;
                for (let i = 0; i < users.length; i += 1) {
                  if (users[i].userUID === userId) {
                    userFoundGetDataFromServer(users[i].company, token, userId);
                    break;
                  }
                }
                dispatch(authActions.authenticate(token, userId));
              })
              .catch((err) => {
                console.log(err);
                alert('Sorry, auto-login failed');
                navigation.navigate('Login');
              });
          }
        }
      }
    });
  }, []);

  const userFoundGetDataFromServer = (company, token, userUID) => {
    axios.get(`https://dvir-project-server.firebaseio.com/companysData/-LysoMQNqw_qplWWGgoR/${company}.json?auth=${token}`)
      .then((res) => {
        onUpdateTrucklist(res.data.vehicle);
        onUpdateTrailerlist(res.data.trailers);
        findUser(userUID, res.data.drivers);
        navigation.navigate('Index');
      })
      .catch((err) => {
        console.log(err);
        navigation.navigate('Login');
      });
  };

  const findUser = (userUID, driversDATA) => {
    for (let i = 0; i < driversDATA.length; i += 1) {
      if (userUID === driversDATA[i].userID) {
        onUpdateUserData(driversDATA[i]);
        break;
      }
    }
  };

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

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUserData: (userData) => dispatch(setUserData(userData)),
    onUpdateTrucklist: (companyTruckList) => dispatch(setTruckList(companyTruckList)),
    onUpdateTrailerlist: (companyTrailerList) => dispatch(setTrailerList(companyTrailerList))
  };
};

export default connect(null, mapDispatchToProps)(StartScreen);
