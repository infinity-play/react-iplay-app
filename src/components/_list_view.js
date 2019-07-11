import React from 'react';
import { FlatList } from 'react-native';
import { background } from '../assets/Styles';
import ItemHome from './_list_item';

export default class ListView extends React.Component {
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
      `http://rodrigo.interno.dynamika.com.br:8080/media/home?MediaSearch[last]=${this.state.last}`
    );
    const responseJson = await response.json();
    if(responseJson.status === 200){
      this.setState({
        data: [...this.state.data, ...responseJson.data],
        last: responseJson.data.pop().id,
        refreshing: false,
      });
    }
  }

  handlerRefresh = () => {
      this.setState({
        last: 0,
        data: [],
        refreshing: true
      }, () => {
        this.makeRemoteRequest();
      });
  }

  handlerLoadMore = () => {
    this.makeRemoteRequest();
  }
  
  _renderItem = ({item}, index) => {
    return (
      <ItemHome 
          title={item.title}
          description={item.description}
          views={item.views}
          creator={item.creator}
          thumb={item.thumb}
          id={item.id}       
          index={index}    
        />
    );
  }

  render() {
    return (
      <FlatList style={background}
          data= {this.state.data}
          renderItem = {this._renderItem}
          keyExtractor = {(item, index) => item.id.toString()}
          refreshing = {this.state.refreshing}
          onRefresh = {this.handlerRefresh}
          onEndReached = {this.handlerLoadMore}
          onEndReachedThreshold = {0}
      />
    );
  }
}


