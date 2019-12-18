import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { store } from './src/store/storeMenu';
import IndexScreen from './src/screens/IndexScreen';
import OldReportsScreen from './src/screens/OldReportsScreen';
import DvirFormScreen from './src/screens/DvirFormScreen';
import TermsOFUse from './src/screens/TermsOFUse';
import CameraPiker from './src/screens/cameraScreen';
import LoginScreen from './src/screens/LoginScreen';
import StartScreen from './src/screens/StartScreen';
import MapScreen from './src/screens/MapScreen';
import TestScreen from './src/screens/TestScreen';
import AllFaultsScreen from './src/screens/AllFaultsScreen';
import SemiFaultsScreen from './src/screens/SemiFaultsScreen';
import Colors from './src/Colors/Colors';


const navigator = createStackNavigator({
  Index: IndexScreen,
  Dvir: DvirFormScreen,
  Terms: TermsOFUse,
  Camera: CameraPiker,
  Map: MapScreen,
  Login: LoginScreen,
  OpenApp: StartScreen,
  Reports: OldReportsScreen,
  Test: TestScreen,
  Faults: AllFaultsScreen,
  SemiFaults: SemiFaultsScreen
},
{
  initialRouteName: 'Camera',
  defaultNavigationOptions: {
    headerBackImage: <Icon name="md-arrow-round-back" color="white" size={30} />,
    headerStyle: {
      backgroundColor: Colors.primary,
    },
  },
  navigationOptions: {
    tabBarLabel: 'Index',
  },
});

const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
