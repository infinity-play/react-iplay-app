import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ListItem } from 'react-native-elements';


class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };  
  render () {
    const { navigate } = this.props.navigation;
    const list = [
      {
        title: 'Sign in',
        icon: 'rest',
        route: 'About',
      },
      {
        title: 'About us',
        icon: 'infocirlceo',
        route: 'About',
      },
    ];  

    return (
      <View>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon, type: 'antdesign'}}
              onPress={() => navigate(item.route)}
            />
          ))
        }
      </View>

    )
  }
}





export default withNavigation(SettingsScreen);
