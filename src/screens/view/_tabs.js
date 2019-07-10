import React from 'react';
import { View, Text, SegmentedControlIOS } from 'react-native';
import { container, tabContainer } from '../../assets/Styles';
import ListView from '../../components/_list_view';



export default class Tabs extends React.PureComponent {
    state = {
        selectedIndex: 0,
    }

    content = (selectedIndex, item) => {
        switch(selectedIndex){
            case 0: return this._info(item);
            case 1: return this._more();
            case 2: return this._more();
            default: return (<Text>hello</Text>);
        }
    }

    _info = (item) => {
        return (
            <Text style={container}>{item.description}</Text>
        );
    }

    _more = () => {
        return <ListView/>;
    }

    render() {
      const item = this.props.data;
      return (
        <View>
            <SegmentedControlIOS
                style={tabContainer}
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