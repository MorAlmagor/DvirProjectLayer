import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import GradientButton from 'react-native-gradient-buttons';

const ModalsButton = ({ onpress, style, children }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
    >
      <View>
        <GradientButton
          onPressAction={onpress}
          style={{ ...styles.btnStyle, ...style }}
          textStyle={{
            fontSize: 14,
            fontFamily: 'Roboto'
          }}
          gradientBegin="#aa0061"
          gradientEnd="#6536FF"
          gradientDirection="diagonal"
        >{children}
        </GradientButton>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  btnStyle: {
    paddingVertical: Dimensions.get('window').width > 600 ? 8 : 10,
    paddingHorizontal: Dimensions.get('window').height > 600 ? 8 : 10,
    width: Dimensions.get('window').width > 600 ? 140 : 160,
    maxWidth: '80%',
    alignItems: 'center'
  },
  container: {
    alignItems: 'center'
  }
});

export default ModalsButton;