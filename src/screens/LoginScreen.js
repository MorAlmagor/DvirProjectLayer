import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Platform,
  Image
} from 'react-native';
import MainButton from '../components/UI/Buttons/MainButton';
import Colors from '../Colors/Colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}
      >
        {/* <View style={styles.image}>
          <Image
            source={require('../../assets/ic_just3.png')}
          /> */}
        <View style={styles.container}>
          <Text style={styles.textStyle}>SIGN UP</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="johndoe@example.com"
            placeholderTextColor="grey"
            textContentType="username"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            keyboardType="default"
            textContentType="password"
            maxLength={12}
            value={password}
            onChangeText={setPassword}
          />
          {password.length < 12 && <Text style={styles.textWords}>Your password must be at least 8 characters</Text>}

          <MainButton onPress={() => { }}>
            SIGN UP
          </MainButton>
        </View>
        {/* </View> */}
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '10%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '50%',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  textStyle: {
    fontSize: Dimensions.get('window').height < 450 ? 16 : 20,
    fontWeight: 'bold',
    color: Colors.primary,
    paddingTop: Dimensions.get('window').height < 600 ? '60%' : '30%',
    paddingVertical: '5%',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  input: {
    height: 50,
    width: Dimensions.get('window').width < 450 ? 280 : 300,
    padding: 12,
    marginVertical: Dimensions.get('window').height < 450 ? 8 : 10,
    borderColor: '#aa0061',
    borderWidth: 1,
    borderRadius: 26,
    justifyContent: 'space-between',
    flexDirection: 'column',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  textWords: {
    color: 'grey',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    paddingBottom: 10
  },
  image: {
    alignItems: 'center',
    marginTop: '10%',
    borderRadius: 10
  }
});

export default LoginScreen;