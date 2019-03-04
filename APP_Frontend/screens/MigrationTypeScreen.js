import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container, Accordion, Content, Header } from 'native-base'
import localeStore from '../locale/localization'

const dataArray = [
  {
    title: 'Ledgal Migration',
    content: `Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
  dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum 
  dolor sit amet, Lorem ipsum dolor sit amet`
  },
  {
    title: 'Illegal Migration',
    content: `Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
  dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum 
  dolor sit amet, Lorem ipsum dolor sit amet`
  }
]
export default class MigrationTypeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.MigrationTypeScreen.title
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
