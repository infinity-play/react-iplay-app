import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavMenu from './components/navmenu';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavMenu/>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2289DC',
    alignItems: 'center',
  },
});
