import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements'; 
import { center, flex, backgroundBlack, styleLogin } from '../assets/Styles';

class Loading extends React.PureComponent {
    
    _loading = (mode) => {
        if(mode){
            return <ActivityIndicator/>;
        }
        return <Logo size={124}/>;
    }
  
    render() {
    const styles = this.props.mode ? [center, flex, backgroundBlack]:styleLogin.login;
    return (
      <View style={styles}>
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


class Search extends React.PureComponent {
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <Button
          type="clear"
          //onPress={() => navigate("Settings")}
          icon={
            <Icon
              name="search"
              size={32} 
              color="#333"
            />
          }  
        />
    );
  }
}

/*

class MySearchBar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        platform="ios"
        containerStyle={styles.search}
        cancelButtonTitle=""
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

const styles = StyleSheet.create({
  search:{
    width: 32, 
    height: 32 
  },
  search:{
    width: 130, 
    height: 32, 
    borderWidth: 0,
  },
});
*/
  
export {
    Loading,
    Logo,
    Search
};
  