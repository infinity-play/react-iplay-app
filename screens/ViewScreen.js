import React from 'react';
import { Text } from 'react-native';

export default class ViewScreen extends React.Component {
    static navigationOptions = {
        title: 'My Video',
    };  

  render() {
    return (
      <Text>My video</Text>
    );
  }
}


