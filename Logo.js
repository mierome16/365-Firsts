import React from 'react'
import { Image } from 'react-native';


export default class Logo extends React.Component {
  render() {
    return (
      <Image
        source={require('./assets/logoWhite.png')}
        style={{ width: 175, height: 40 }}
      />
    );
  }
}