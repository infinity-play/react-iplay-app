import React from 'react';
import { View } from 'react-native';
import { styleVideo } from '../../assets/Styles';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import RateButtom from './_rate_btn';

class Footer extends React.Component {
  render() {
    return (
      <View style={styleVideo.footer}>
        <Button type="clear"
        icon={
            <Icon
            name='info'
            size={20}
            color='#b34764'
            />
        }
        />
        <Button type="clear"
        icon={
            <Icon
            name='info'
            size={20}
            color='white'
            />
        }
        />
        <RateButtom/>
        <Button type="clear"
        icon={
            <Icon
            name='info'
            size={20}
            color='white'
            />
        }
        />
        <Button type="clear"
        icon={
            <Icon
            name='info'
            size={20}
            color='white'
            />
        }
        />
      </View> 
    );
  }
}

export default Footer;


/*
play-circle-o (Info video)
message (comentarios)
(IPLAY | R8 Star)
appstore-o (videos do mesmo creator content)
rocket (videos relacionados)

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

*/