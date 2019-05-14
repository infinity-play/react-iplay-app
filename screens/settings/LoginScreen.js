import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Input, Button } from 'react-native-elements';
import { Logo } from '../../components/nav-menu-items';
import { background, flex, styles, fullWidth } from '../../assets/Styles';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };  

  render() {
    return (
      <View style ={[background, flex]}>
        <View style={styles.login}>
          <Logo size={124}/>
          <Input
            placeholder='LOGIN'
            rightIcon={
              <Icon
                name='user'
                size={24}
                color='#CCC'
              />
            }
          />
          <Input
            placeholder='PASSWORD'
            rightIcon={
              <Icon
                name='key'
                size={24}
                color='#CCC'
              />
            }
          />
          <Button buttonStyle={fullWidth}
            title="Sign In"
          />
        </View>
      </View>
    );
  }
}

