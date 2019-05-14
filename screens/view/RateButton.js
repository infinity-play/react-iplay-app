import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MultiBarToggle } from 'react-native-multibar';


export default class RateButton extends React.Component {
  render() {
    const rateList = ['Horrible', 'Bad', 'Good', 'Great', 'Awesome'];  
    return (
        <MultiBarToggle
        actionSize={30}
        toggleSize={60}
        animateIcon={false}
        routes={
            rateList.map((rate, i) => (
                {
                color: '#E8E288',
                icon: (
                    <Icon
                        name="star"
                        color="#333333"
                        size={15}
                    />
                )}
            ))
        }
        icon={(
            <Icon
                name="star"
                color="#FFFFFF"
                size={24}
            />
        )}
    />
    );
  }
}
