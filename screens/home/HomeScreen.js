import React from 'react';
import { StyleSheet } from 'react-native';
import ButtonMenu, { Logo, MySearchBar } from '../../components/nav-menu-items';
import { withNavigation } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import ItemHome from './ItemHome';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerLeft: <ButtonMenu/>,
    headerTitle: <Logo/>,
    headerRight: <MySearchBar/>
  };

  render() {
    const { navigate } = this.props.navigation;
    const videos = [
      {
        title: "my video",
        description: "lorem",
        views: '5.000',
        creator: 'Neil'
      },
      {
        title: "my video",
        description: "lorem",
        views: '5.000',
        creator: 'Neil'
      },
      {
        title: "my video",
        description: "lorem",
        views: '5.000',
        creator: 'Neil'
      },
      {
        title: "my video",
        description: "lorem",
        views: '5.000',
        creator: 'Neil'
      }
    ];
    return (
      <ScrollView style={styles.background}>
        {
          videos.map((video, i) => (
            <ItemHome 
              title={video.title}
              description={video.description}
              views={video.views}
              creator={video.creator}
              key={i}
              id={i}              
            />
          ))            
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#f9f9f9',
  },
});


export default withNavigation(HomeScreen);

