import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button, Icon, SearchBar } from 'react-native-elements';

class ButtonMenu extends React.Component {

  ButtonIcon(mode){
    switch(mode){
      case "menu": return "arrow-forward";
      case "default": return "menu";
    }
  }

  render() {
    return (
      <Button
          icon={
            <Icon
              name={this.ButtonIcon(this.props.mode)}
              size={32}
              color="#333"
            />
          }
          type="clear"
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


export{
  MySearchBar,
  MyButton,
  ButtonMenu,
  Logo,
}