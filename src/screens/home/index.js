import React from 'react';
import ButtonMenu, { Logo, MySearchBar } from '../../components/nav-menu-items';
import { FlatList } from 'react-native';
import { background } from '../../assets/Styles';
import ItemHome from './_list_item';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerLeft: <ButtonMenu/>,
    headerTitle: <Logo/>,
    headerRight: <MySearchBar/>
  };

  state = {
    last: 0,
    data: [],
    refreshing: true
  }

  componentDidMount(){
    this.makeRemoteRequest();
  }

  async makeRemoteRequest(){
    const response = await fetch(
      `http://rodrigo.interno.dynamika.com.br:8080/media/home?last=${this.state.last}`
    );
    const responseJson = await response.json();
    this.setState({
      data: [...this.state.data, ...responseJson.data],
      last: responseJson.data.pop().id,
      refreshing: false
    });
  }

  handlerRefresh = () => {
    this.setState({
      refreshing: true
    }, () => {
      this.makeRemoteRequest();
    });
  }

  handlerLoadMore = () => {
    this.makeRemoteRequest();
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
          data= {this.state.data}
          renderItem = {this._renderItem}
          keyExtractor = {(item) => item.id.toString()}
          refreshing = {this.state.refreshing}
          onRefresh = {this.handlerRefresh}
          onEndReached = {this.handlerLoadMore}
          onEndReachedThreshold = {0}
      />
    );
  }
}

export default HomeScreen;

