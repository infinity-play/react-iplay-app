/*
 * DEPENDENCIAS
 */
import React from 'react';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MultiBar } from 'react-native-multibar';
/*
 * TELAS DO APLICATIVO
 */
import HomeScreen from './screens/home/HomeScreen';
import SettingsScreen from './screens/settings/SettingsScreen';
import AboutScreen from './screens/settings/AboutScreen';
import LoginScreen from './screens/settings/LoginScreen';
import ViewScreen from './screens/view/ViewScreen';
import DebugScreen from './screens/debug/DebugScreen';

/*
 *  NAVIGATOR
 */

const StackNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Settings: {screen: SettingsScreen},
  About: {screen: AboutScreen},
  Login: {screen: LoginScreen},
  View: {screen: ViewScreen},
  Debug: {screen: DebugScreen}
},{
  initialRouteName: 'Home',
});

/*
 * APP MAIN
 */
const App = createAppContainer(StackNavigator);

export default App;
