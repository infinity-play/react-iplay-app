import React from 'react';
import { View } from 'react-native';

class DebugScreen extends React.Component {
    static navigationOptions = {
        
    };

    componentDidMount = () => {
        fetch('https://raw.githubusercontent.com/RodrigoDornelles/iplay-themes/master/main.json',{
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
        })
        .catch((error) => {
            console.error(error);
            alert(error);
        });
    }

    render() {
        return (
        <View>
            
        </View>
        );
    }
}

export default DebugScreen;

