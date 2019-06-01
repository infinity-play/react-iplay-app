import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Input, Button } from 'react-native-elements';
import { Logo } from '../../components/nav-menu-items';
import { background, flex, styleLogin, fullWidth } from '../../assets/Styles';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Join us',
    };  

  render() {
    return (
      <View style ={[background, flex]}>
        <View style={styleLogin.login}>
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
            secureTextEntry={true}
            placeholder='PASSWORD'
            rightIcon={
              <Icon
                name='lock'
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

