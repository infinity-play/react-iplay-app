import React from 'react';
import { View, Text, SegmentedControlIOS } from 'react-native';
import { container, flex } from '../../assets/Styles';



export default class Tabs extends React.PureComponent {
    state = {
        selectedIndex: 0,
    }

    content = (selectedIndex, item) => {
        switch(selectedIndex){
            case 0: return this._info(item);
            default: return (<Text>hello</Text>);
        }
    }


    _info = (item) => {
        return (
            <Text>{item.description}</Text>
        );
    }


    render() {
      const item = this.props.data;
      return (
        <View style={container}>
            <SegmentedControlIOS
                style={{marginBottom: 20}}
                values={['Info', 'More From', 'Related', 'Comments']}
                selectedIndex={this.state.selectedIndex}
                onChange={(event) => {
                    this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                }}
            />
            {this.content(this.state.selectedIndex, item)}
        </View>
      );
    }
}