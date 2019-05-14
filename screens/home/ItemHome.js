import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from '../../assets/Styles';


class ItemHome extends React.Component {
  render() {
    const styleVideo = (this.props.id%2==0)? [styles.video,styles.videoOdd]:styles.video;
    const { navigate } = this.props.navigation;
    return (
        <TouchableOpacity onPress={() => navigate("View",{id: this.props.id})}>
            <View style={styleVideo}>
                <Image style={styles.thumb} source={this.props.thumb}/>
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

export default withNavigation(ItemHome);

