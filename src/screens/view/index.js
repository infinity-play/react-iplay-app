import React from 'react';
import { WebView } from 'react-native-webview';
import { ListItem } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import { flex, spaceBetween, player } from '../../assets/Styles';
import Footer from './_footer';
import RateInfo from './_rate_info';
import Tabs from './_tabs';
import { Loading } from '../../components';




class ViewScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  state = {
    data: null,
  }

  componentDidMount(){
    this.makeRemoteRequest();
  }

  async makeRemoteRequest(){
    const id = this.props.navigation.state.params.id;
    const response = await fetch(
      `http://rodrigo.interno.dynamika.com.br:8080/media/view/${id}`
    );
    const responseJson = await response.json();
    this.setState({
      data: responseJson.data,
    });
  }

  _player = (source) => {
    return (
      <WebView 
          useWebKit={true}
          allowsInlineMediaPlayback={true}
          startInLoadingState={true}
          renderLoading={() => this._loading(1)}
          source={{ uri: source }}
        />
    );
  }

  _creator = (origin, views) => {
    return (
      <ListItem
        title={origin.name}
        subtitle={`${origin.follows} followers`}
        rightTitle={<RateInfo/>}
        rightSubtitle={`${views} views`}
        leftAvatar={{ source: { uri: origin.avatar } }}
      />
    );
  }

  _loading = (mode) => {
    return (<Loading mode={mode}/>);
  }

  _view = (item) => {
    return (
      <View style={[flex, spaceBetween]}>
        <View style={player}>
          {this._player(item.source)}
        </View>
        <ScrollView>
          {this._creator(item.origin, item.views)}
          <Tabs
            id={this.props.navigation.state.params.id}
            data={item}
          />
        </ScrollView>
      </View>
    );
  }

  render() {
    if(this.state.data === null){
      return this._loading();
    }
    return this._view(this.state.data);
  }
}


export default ViewScreen;