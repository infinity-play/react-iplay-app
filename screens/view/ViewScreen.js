import React from 'react';
import { Tile } from 'react-native-elements';
import { View, Text } from 'react-native';
//import { background } from '../../assets/Styles';
import videos from '../../assets/Videos';




class ViewScreen extends React.Component {
    static navigationOptions = {
        title: 'My Video',
    };  

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', 0);
    const video = videos[id];
    return (
      <View>
        <Tile
          imageSrc={video.thumb}
          icon={{ name: 'play-circle', type: 'font-awesome', color: '#FFF', size: 64 }}
          featured
        />
        <Text>{video.title}</Text>
      </View>
    );
  }
}


export default ViewScreen;