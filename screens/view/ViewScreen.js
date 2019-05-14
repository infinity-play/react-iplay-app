import React from 'react';
import { Tile } from 'react-native-elements';
import { View } from 'react-native';




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
        
      </View>
    );
  }
}


export default ViewScreen;