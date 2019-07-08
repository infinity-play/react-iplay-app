import React from 'react';
import ButtonMenu, { Logo, MySearchBar } from '../../components/nav-menu-items';
import { FlatList } from 'react-native-gesture-handler';
import { background } from '../../assets/Styles';
import ItemHome from './_list_item';
import videos from '../../assets/Videos';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerLeft: <ButtonMenu/>,
    headerTitle: <Logo/>,
    headerRight: <MySearchBar/>
  };

  state = {
    data: []
  }

  async componentDidMount(){
    const response = await fetch("http://rodrigo.interno.dynamika.com.br:8080/media/home");
    const responseJson = await response.json();
    this.setState({data: responseJson});
  }

  _renderItem = ({item}) => {
    return (
      <ItemHome 
          title={item.title}
          description={item.description}
          views={item.views}
          creator={item.creator}
          thumb={item.thumb}
          id={item.id}           
        />
    )
  }

  render() {
    return (
      <FlatList style={background}
          data={this.state.data}
          renderItem = {this._renderItem}
          keyExtractor = {(item) => item.id}
      />
    );
  }
}

export default HomeScreen;

