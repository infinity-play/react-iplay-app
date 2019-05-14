import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class ItemHome extends React.Component {
  render() {
    const styleVideo = (this.props.id%2==0)? [styles.video,styles.videoOdd]:styles.video;
    const { navigate } = this.props.navigation;
    return (
        <TouchableOpacity onPress={() => navigate("View")}>
            <View style={styleVideo}>
                <Image style={styles.thumb} source={require('../../assets/images/neil.jpg')}/>
                <View style={styles.main}>
                    <Text style={styles.title} >{this.props.title}</Text>
                    <Text>{this.props.description}</Text>
                    <View style={styles.info}>
                        <Text style={styles.detail}>{this.props.creator}</Text>
                        <Text style={styles.detail}>{this.props.views} Views</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  video:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  videoOdd:{
    backgroundColor: '#FFF'
  },
  thumb:{
    flex: 1,
    height: 'auto',
  },
  main:{
    width: 220,
    height: 80,
    marginHorizontal: 5,   
  },
  info:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  detail:{
    fontSize: 10,
    color: '#999',
  },
  title: {
      fontSize: 24,
  }
});


export default withNavigation(ItemHome);

