import React from 'react';
import axios from 'axios';
import {
  View,
  Text,
} from 'react-native';

const TestScreen = () => {


  const tests = axios({
    method: 'get',
    url: 'http://31.220.62.151:1880/lprclassifier/aHR0cHM6Ly9hLnVndXUuc2UvUWxNc3hQblVacXA2X3BpY3R1cmUuanBn',
  });
  tests.then((res) => console.log(res));

  return (
    <View>
      <Text>blaa</Text>
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