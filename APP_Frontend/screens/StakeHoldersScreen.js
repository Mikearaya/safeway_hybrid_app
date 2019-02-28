import React, { Component } from 'react'
import { Text } from 'react-native'

export default class StakeHoldersScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Stakeholders')
    }
  }

  render() {
    return <Text>Stakeholders</Text>
  }
}
