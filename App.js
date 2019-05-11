/*
 * DEPENDENCIAS
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';
/*
 * TELAS DO APLICATIVO
 */
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';
import ViewScreen from './screens/ViewScreen';

/*
 *  NAVIGATOR
 */
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Settings: {screen: SettingsScreen},
  About: {screen: AboutScreen},
  Login: {screen: LoginScreen},
  View: {screen: ViewScreen}
},{
  initialRouteName: 'Home',
});

/*
 * APP MAIN
 */
const App = createAppContainer(MainNavigator);

export default App;
