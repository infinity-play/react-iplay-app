import React from 'react';
import { View } from 'react-native';
import { Tile } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import ViewTab from './Tab';


class ViewScreen extends React.Component {
    static navigationOptions = {
        title: 'My Video',
    };  

  render() {
    return (
      <View>
        <Tile
          imageSrc={require('../../assets/images/neil.jpg')}
          icon={{ name: 'play-circle', type: 'font-awesome', color: '#FFF', size: 64 }}
          featured
        />
        <ViewTab/>
      </View>

    );
  }
}


export default withNavigation(ViewScreen);