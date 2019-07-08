import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styleVideo, textContainer} from '../../assets/Styles';


class ItemHome extends React.Component {
  render() {
    const itemStyle = (this.props.id%2==0)? [styleVideo.item,styleVideo.itemOdd]:styleVideo.item;
    const { navigate } = this.props.navigation;
    return (
        <TouchableOpacity onPress={() => navigate("View",{id: this.props.id})}>
            <View style={itemStyle}>
                <Image style={styleVideo.thumb} source={{uri: this.props.thumb}}/>
                <View style={textContainer}>
                    <Text style={styleVideo.title} >{this.props.title}</Text>
                    <Text>{this.props.description}</Text>
                    <View style={styleVideo.info}>
                        <Text style={styleVideo.detail}>{this.props.creator}</Text>
                        <Text style={styleVideo.detail}>{this.props.views} Views</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
  }
}

export default withNavigation(ItemHome);

