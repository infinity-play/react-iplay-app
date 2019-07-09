import React from 'react';
import { WebView } from 'react-native-webview';
import { ListItem } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import { flex, spaceBetween } from '../../assets/Styles';
import Footer from './_footer';
import RateInfo from './_rate_info';
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

  _loading = (mode) => {
    return (<Loading mode={mode}/>);
  }

  _view = (item) => {
    const origin = item.origin;
    return (
      <View style={[flex, spaceBetween]}>
        <WebView 
          useWebKit={true}
          allowsInlineMediaPlayback={true}
          startInLoadingState={true}
          renderLoading={() => this._loading(1)}
          source={{ uri: item.source }}
        />
        <ScrollView>
          <ListItem
            title={origin.name}
            subtitle={`${origin.follows} followers`}
            rightTitle={<RateInfo/>}
            rightSubtitle={`${item.views} views`}
            leftAvatar={{ source: { uri: origin.avatar } }}
          />
          <Text>
            {item.description}
          </Text>

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