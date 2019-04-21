import React from 'react';
import { Header } from 'react-native-elements';
import { ButtonMenu, Logo, MySearchBar, MyButton } from './nav-menu-items';


export default class NavMenu extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            mode: "default",
        };
    }

    setNavMenuMode = (mode) => {
        this.setState({mode});
    }

    render() {
        switch(this.state.mode){
            case "default": case "video": return (
                <Header backgroundColor="#FAFAFA">
                    <ButtonMenu mode="default"/>
                    <Logo/>
                    {this.state.mode==="video"?<MyButton title="close"/>:<MySearchBar/>}
                </Header>
            );
            case "menu": return (
                <Header 
                    backgroundColor="#FAFAFA"
                    rightComponent={<ButtonMenu mode="menu" />}
                    />
            );
            default: return (
                <Header 
                    backgroundColor="#FAFAFA"
                    centerComponent={{ text: '#ERROR: unknown mode', style: { color: '#333' } }}
                    />
            );
        }    
            
    }
}

