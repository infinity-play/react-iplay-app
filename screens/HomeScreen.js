import React from 'react';
import { Text } from 'react-native';
import ButtonMenu, { Logo, MySearchBar } from '../components/nav-menu-items';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerLeft: <ButtonMenu/>,
    headerTitle: <Logo/>,
    headerRight: <MySearchBar/>
  };

  render() {
    return (
      <Text>Hello World</Text>
    );
  }
}


