import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, Icon, SearchBar } from 'react-native-elements'; 


class ButtonMenu extends React.Component {

  ButtonIcon(mode){
    switch(mode){
      case "menu": return "arrow-forward";
      case "default": return "menu";
    }
  }

  ButtonRoute(mode){
    switch(mode){
      case "default": return "Settings";
      default: "Home";
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
          type="clear"
          icon={
            <Icon
              name={this.ButtonIcon(this.props.mode)}
              size={32} 
              color="#333"
            />
          }
          onPress={
            this.props.mode === "menu"?
            () => this.props.navigation.goBack():
            () => navigate(this.ButtonRoute(this.props.mode))
          }  
        />
    );
  }
}

class MyButton extends React.Component {
  render() {
    return (
      <Button
          title={this.props.title}
          type="clear"
        />
    );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <Image 
        style={styles.logo}
        source={require('../assets/images/icon-md.png')}
      />
    );
  }
}

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
  logo: {
    width: 32,
    height: 32,
  },
  search:{
    width: 130, 
    height: 32, 
    borderWidth: 0,
  },
});

export default withNavigation(ButtonMenu);

export{
  MySearchBar,
  MyButton,
  Logo,
}