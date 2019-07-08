import React from 'react';
import { Tile, Avatar } from 'react-native-elements';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { flex, spaceBetween } from '../../assets/Styles';
import Footer from './_footer';



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
        <View> 
          <Avatar
            rounded
            source={{
              uri:
              'https://cdn.discordapp.com/attachments/268884978132058112/504709926359138305/default_256_256.png',
            }}
          />
        </View>


        </ScrollView>
        <Footer/>
      </View>
    );
  }
}


export default ViewScreen;