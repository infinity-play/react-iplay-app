import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { MainMenuItems } from '../../assets/MenuItems';


class SettingsScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Settings',
  };  
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View>
        {
          MainMenuItems.map((item, i) => (
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
