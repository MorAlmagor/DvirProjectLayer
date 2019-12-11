import React from 'react';
import {
  ProgressChart
} from 'react-native-chart-kit';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Colors from '../Colors/Colors';

const TestScreen = () => {

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#EA0A8B',
    backgroundGradientTo: Colors.primary,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726'
    }
  };

  const dataTrucks = {
    labels: ["Truck", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };


  return (
    <View style={{backgroundColor: Colors.primary, width: '100%', height: '100%', top: 0, left: 0}}>
    <View style={{backgroundColor: Colors.primary}}>
      <ProgressChart
        data={dataTrucks}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={chartConfig}
        hideLegend={false}
      />
    </View>
    </View>
  );
};

export default TestScreen;

{/* <TouchableOpacity>
<View style={{ width: '80%', alignItems: 'center', borderColor: Colors.primary, borderWidth: 2, borderRadius: 10, overflow: 'hidden', marginVertical: 20 }}>
  <ProgressChart
    data={dataTrucks}
    width={Dimensions.get('window').width * 0.8}
    height={220}
    chartConfig={chartConfig}
    hideLegend={false}
  />
</View>
</TouchableOpacity> */}

// const dataTrucks = {
//   labels: ["Truck", "Bike", "Run"], // optional
//   data: [0.4, 0.6, 0.8]
// };

// const chartConfig = {
//   backgroundColor: '#e26a00',
//   backgroundGradientFrom: '#fb8c00',
//   backgroundGradientTo: '#ffa726',
//   decimalPlaces: 2, // optional, defaults to 2dp
//   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//   labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//   style: {
//     borderRadius: 16
//   },
//   propsForDots: {
//     r: '6',
//     strokeWidth: '2',
//     stroke: '#ffa726'
//   }
// };