import React, { useEffect } from 'react';
import {
  View,
  Text,
  Button,
  AsyncStorage
} from 'react-native';
import axios from 'axios';


const TestScreen = () => {
  useEffect(() => {
    const Notifications = {
      ups: {
        generalNotifications: {
          doNotDelete: 'doNotDelete'
        },
        impotentNotifications: {
          doNotDelete: 'doNotDelete'
        }
      },
      cita: {
        generalNotifications: {
          doNotDelete: 'doNotDelete'
        },
        impotentNotifications: {
          doNotDelete: 'doNotDelete'
        }
      }
    };
    AsyncStorage.getItem('userData').then((value) => {
      const temp = JSON.parse(value);
      // post(temp.token, Notifications);
    });
  }, []);
  

  const post = (token, DATA) => {
    console.log(token);
    console.log(DATA);
    axios.put(`https://dvir-project-server.firebaseio.com/Notifications/.json?auth=${token}`, DATA)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };


  const get = async () => {
    await axios.get('https://react-burger-app-9b9c5.firebaseio.com/.json')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const del = () => {
    axios.delete('https://react-burger-app-9b9c5.firebaseio.com/-LyVgH73c_k6vdM0Qgvh.json')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const put = async () => {
    const newDATA = {
      name: 'avi',
      lastName: 'shami',
      age: '32',
      car: 'volvo'
    };
    await axios.put('https://react-burger-app-9b9c5.firebaseio.com/users.json', newDATA)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };


  return (
    <View>
      <Text>smvsmv</Text>
      <Button title="post" onPress={() => post()} />
      <Button title="get" onPress={() => get()} />
      <Button title="delete" onPress={() => del()} />
      <Button title="put" onPress={() => put()} />
    </View>
  );
};
export default TestScreen;
