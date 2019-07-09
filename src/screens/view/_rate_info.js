import React from 'react';
import { Rating } from 'react-native-elements';


export default class RateInfo extends React.Component {
  render() {
    return (
        <Rating
            readonly
            showReadOnlyText
            imageSize={10}
        />
    );
  }
}
