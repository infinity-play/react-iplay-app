import React from 'react';
import { View } from 'react-native';
import { background, flex } from '../../assets/Styles';
import { ActivityIndicator } from 'react-native';

export class LoadingScreen extends React.Component {
  render() {
    return (
      <View style ={[background, flex]}>
          <ActivityIndicator />
      </View>
    );
  }
}

