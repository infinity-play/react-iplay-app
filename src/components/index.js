import React from 'react';
import { View, Image } from 'react-native';
import { alignCenter, center, flex, backgroundBlack, styleLogin } from '../assets/Styles';
import { ActivityIndicator } from 'react-native';

class Loading extends React.PureComponent {
    
    _loading = (mode) => {
        if(mode){
            return <ActivityIndicator/>
        }
        return <Logo size={124}/>
    }
  
    render() {
    styles = this.props.mode ? [center, flex, backgroundBlack]:styleLogin.login;
    return (
      <View style ={styles}>
          {this._loading(this.props.mode)}
      </View>
    );
  }
}

class Logo extends React.PureComponent {
    render() {
      const size = {width: this.props.size, height: this.props.size};
      return (
        <Image 
          style={size}
          source={require('../assets/images/icon-md.png')}
        />
      );
    }
}
  
Logo.defaultProps = {
    size: 32
};
  
export {
    Loading,
    Logo
}
  