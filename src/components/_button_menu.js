import React from 'react';
import { withNavigation } from 'react-navigation';
import { Button, Icon } from 'react-native-elements'; 


class ButtonMenu extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
          type="clear"
          onPress={() => navigate("Settings")}
          icon={
            <Icon
              name="menu"
              size={32} 
              color="#333"
            />
          }  
        />
    );
  }
}

export default withNavigation(ButtonMenu);
