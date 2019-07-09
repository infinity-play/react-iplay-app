import React from 'react';
import { WebView } from 'react-native-webview';
import { ListItem } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import { flex, spaceBetween } from '../../assets/Styles';
import Footer from './_footer';
import RateInfo from './_rate_info';




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

  _loading = () => {
    return (<Text>carregando</Text>);
  }

  _view = () => {
    return (
      <View style={[flex, spaceBetween]}>
        <WebView 
          allowsFullscreenVideo
          source={{ uri: 'https://www.youtube.com/embed/NW3WLBagn_4' }}
        />
        <ScrollView>
          <ListItem
            title={this.state.data.creator}
            subtitle={"500 followers"}
            rightTitle={<RateInfo/>}
            rightSubtitle={`${this.state.data.views} views`}
            leftAvatar={{ source: { uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" } }}
          />
          <Text>
            {this.state.data.description}
          </Text>

        </ScrollView>
      </View>
    );
  }

  render() {
    if(this.state.data === null){
      return this._loading();
    }
    return this._view();
  }
}


export default ViewScreen;