import React from 'react';
import { Tile } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


class ViewScreen extends React.Component {
    static navigationOptions = {
        title: 'My Video',
    };  

  render() {
    return (
      <Tile
        imageSrc={require('../assets/images/neil.jpg')}
        icon={{ name: 'play-circle', type: 'font-awesome', color: '#FFF', size: 64 }}
        featured
      />

    );
  }
}


export default withNavigation(ViewScreen);