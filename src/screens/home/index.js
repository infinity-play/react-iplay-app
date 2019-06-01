import React from 'react';
import ButtonMenu, { Logo, MySearchBar } from '../../components/nav-menu-items';
import { ScrollView } from 'react-native-gesture-handler';
import { background } from '../../assets/Styles';
import ItemHome from './_list_item';
import videos from '../../assets/Videos';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerLeft: <ButtonMenu/>,
    headerTitle: <Logo/>,
    headerRight: <MySearchBar/>
  };

  render() {
    return (
      <ScrollView style={background}>
        {
          videos.map((video, i) => (
            <ItemHome 
              title={video.title}
              description={video.description}
              views={video.views}
              creator={video.creator}
              thumb={video.thumb}
              key={i}
              id={i}              
            />
          ))            
        }
      </ScrollView>
    );
  }
}

export default HomeScreen;

