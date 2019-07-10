import React from 'react';
import { Logo, Search } from '../../components';
import ButtonMenu from '../../components/_button_menu';
import ListView from '../../components/_list_view';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerLeft: <ButtonMenu/>,
    headerTitle: <Logo/>,
    headerRight: <Search/>
  };

  render() {
    return (
      <ListView/>
    );
  }
}

export default HomeScreen;

