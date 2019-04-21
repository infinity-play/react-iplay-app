import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavMenu from '../components/navmenu';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
        <NavMenu mode="menu"/>
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

