import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Settings: {screen: SettingsScreen},
},{
  initialRouteName: 'Home',
  headerMode: "none",
});

const App = createAppContainer(MainNavigator);

export default App;
