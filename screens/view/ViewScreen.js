import React from 'react';
import { Tile } from 'react-native-elements';
import { View, Text } from 'react-native';
import videos from '../../assets/Videos';
import { ScrollView } from 'react-native-gesture-handler';
import { flex, spaceBetween } from '../../assets/Styles';
import Footer from './Footer';



class ViewScreen extends React.Component {
    static navigationOptions = {
        title: 'My Video',
    };  

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', 0);
    const video = videos[id];
    return (
      <View style={[flex, spaceBetween]}>
        <Tile
          imageSrc={video.thumb}
          icon={{ name: 'play-circle', type: 'font-awesome', color: '#FFF', size: 64 }}
          featured
        />
        <ScrollView>

        </ScrollView>
        <Footer/>
      </View>
    );
  }
}


export default ViewScreen;