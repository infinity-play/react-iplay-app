import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Settings: {screen: SettingsScreen},
  About: {screen: AboutScreen}
},{
  initialRouteName: 'Home',
  //headerMode: "none",
});

const App = createAppContainer(MainNavigator);

export default App;
