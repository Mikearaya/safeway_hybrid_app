import React, { Component } from 'react'
import { Text } from 'react-native'

export default class MigrationTypeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Immigration types')
    }
  }

  render() {
    return <Text>Immigration type</Text>
  }
}
