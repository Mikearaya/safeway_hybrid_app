import React, { Component } from 'react'
import { Text } from 'react-native'

export default class EmergencyContactsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Emergency Contacts')
    }
  }

  render() {
    return <Text>Emergency Contacts list</Text>
  }
}
