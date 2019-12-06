import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Colors from '../Colors/Colors';


const StartScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => { navigation.navigate('Index'); }, 4000);
  }, []);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
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