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

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', 0);
    
    return (
      <View style={[flex, spaceBetween]}>
        <WebView 
          source={{ uri: 'https://www.google.com' }}
        />
        <ScrollView>
          <ListItem
            title={"Rodrigo Dornelles"}
            subtitle={"500 followers"}
            rightTitle={<RateInfo/>}
            rightSubtitle={"0 views"}
            leftAvatar={{ source: { uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" } }}
          />


        </ScrollView>
        <Footer/>
      </View>
    );
  }
}


export default ViewScreen;