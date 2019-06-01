import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, Icon, SearchBar } from 'react-native-elements'; 


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

export default withNavigation(ButtonMenu);

export{
  MySearchBar,
  MyButton,
  Logo,
}