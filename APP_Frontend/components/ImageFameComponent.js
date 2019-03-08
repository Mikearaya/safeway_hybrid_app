import React, { Component } from 'react'
import { Image } from 'native-base';

export default class ImageFame extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.imageLocation === null || this.props.imageLocation === '') {
      return
    } else {
      return (
        <Image
              source={require({ this.props.imageLocation ? './../assets/images/image-not-found.jpg' : './../assets/images/image-not-found.jpg'})}
          style={{
            height: 200,
            width: width
          }}
        />
      );
    }
  }
}
