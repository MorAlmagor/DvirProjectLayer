import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Colors from '../../../Colors/Colors';

const ModalsButton = ({ onpress, odds, title }) => {
  return (
    <View style={styles.topContainer}>
      <TouchableOpacity style={styles.TouchableOpacityStyle} onPress={onpress}>
        <View style={styles.container}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.oddsText}>{odds}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 15,
    fontSize: 17,
    width: '80%'
  },
  oddsText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 17,
    
  },
  container: {
    backgroundColor: 'grey',
    width: '100%',
    height: 40,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row'
  },
  TouchableOpacityStyle: {
    width: Dimensions.get('window').width * 0.9
  },
  topContainer: {
    marginVertical: '1%'
  }
});

export default ModalsButton;