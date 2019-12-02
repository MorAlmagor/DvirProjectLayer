import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { store } from './src/store/storeMenu';
import IndexScreen from './src/screens/IndexScreen';
import DvirFormScreen from './src/screens/DvirFormScreen';
import TermsOFUse from './src/screens/TermsOFUse';
import CameraPiker from './src/screens/cameraScreen';
import LoginScreen from './src/screens/LoginScreen';
import StartScreen from './src/screens/StartScreen';
import MapScreen from './src/screens/MapScreen';
// import TestScreen from './src/screens/TestScreen';


const navigator = createStackNavigator({
  Index: IndexScreen,
  Dvir: DvirFormScreen,
  Terms: TermsOFUse,
  Camera: CameraPiker,
  Map: MapScreen,
  Login: LoginScreen,
  OpenApp: StartScreen,
  // Test: TestScreen לא למחוק מסך לניסיונות
},
{
  initialRouteName: 'Dvir',
  defaultNavigationOptions: {
    title: 'Just Drive'
  }
});

const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
