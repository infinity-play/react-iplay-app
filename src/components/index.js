import React from 'react';
import { View, Image } from 'react-native';
import { alignCenter, center, flex, backgroundBlack } from '../assets/Styles';
import { ActivityIndicator } from 'react-native';

class Loading extends React.PureComponent {
    
    _loading = (mode) => {
        if(mode){
            return <ActivityIndicator/>
        }
        return <Logo size={124}/>
    }
  
    render() {
    background = this.props.mode?backgroundBlack:null;
    return (
      <View style ={[alignCenter, center, flex, background]}>
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
  