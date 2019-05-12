import React from 'react';
import { Text, View } from 'react-native';
import ButtonMenu, { Logo, MySearchBar } from '../../components/nav-menu-items';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerLeft: <ButtonMenu/>,
    headerTitle: <Logo/>,
    headerRight: <MySearchBar/>
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        
        <Button
            title="Teste-me"
            onPress={() => navigate("View")}
              
          />
      </View>
    );
  }
}

export default withNavigation(HomeScreen);

