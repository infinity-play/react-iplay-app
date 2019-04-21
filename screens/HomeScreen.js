import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavMenu from '../components/navmenu';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
        <NavMenu mode="default"/>
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

