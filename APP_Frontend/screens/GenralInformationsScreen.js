import React, { Component } from 'react'
import { Text } from 'react-native'

const dataArray = [
  {
    title: 'Required Documents',
    content: `Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
  dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum 
  dolor sit amet, Lorem ipsum dolor sit amet`
  },
  {
    title: 'Responsible parties',
    content: `Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
  dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum 
  dolor sit amet, Lorem ipsum dolor sit amet`
  },
  {
    title: 'Available resources',
    content: `Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
  dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum 
  dolor sit amet, Lorem ipsum dolor sit amet`
  }
]
export default class GeneralInformationsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'General Informations')
    }
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0} />
        </Content>
      </Container>
    )
  }
}
