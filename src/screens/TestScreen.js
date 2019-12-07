// CheckConnectivity = () => {
//   // For Android devices
//   if (Platform.OS === "android") {
//     NetInfo.isConnected.fetch().then(isConnected => {
//       if (isConnected) {
//         Alert.alert("You are online!");
//       } else {
//         Alert.alert("You are offline!");
//       }
//     });
//   } else {
//     // For iOS devices
//     NetInfo.isConnected.addEventListener(
//       "connectionChange",
//       this.handleFirstConnectivityChange
//     );
//   }
// };

// handleFirstConnectivityChange = isConnected => {
//   NetInfo.isConnected.removeEventListener(
//     "connectionChange",
//     this.handleFirstConnectivityChange
//   );

//   if (isConnected === false) {
//     Alert.alert("You are offline!");
//   } else {
//     Alert.alert("You are online!");
//   }
// };
///////////////////////////// T A M P L A T E //////////////////////////////

/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import React from 'react';
import AutoScrolling from 'react-native-auto-scrolling';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform
} from 'react-native';
import Colors from '../Colors/Colors';

const TestScreen = (props) => {
  //

  return (
    <View style={styles.backdrop}>
      <Text>test screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});


export default TestScreen;
