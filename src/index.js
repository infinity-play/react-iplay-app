/*
 * DEPENDENCIAS
 */
import { createStackNavigator } from 'react-navigation';
/*
 * TELAS DO APLICATIVO
 */
import HomeScreen from './screens/home';
import SettingsScreen from './screens/settings';
import AboutScreen from './screens/about/';
import LoginScreen from './screens/login';
import ViewScreen from './screens/view';
import DebugScreen from './screens/debug';

/*
 *  NAVIGATOR
 */

const AppScreens = createStackNavigator({
  Home: {screen: HomeScreen},
  Settings: {screen: SettingsScreen},
  About: {screen: AboutScreen},
  Login: {screen: LoginScreen},
  View: {screen: ViewScreen},
  Debug: {screen: DebugScreen}
},{
  initialRouteName: 'Home',
});

export default AppScreens;

