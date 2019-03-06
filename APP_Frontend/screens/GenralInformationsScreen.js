import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container, Content, Accordion } from 'native-base'
import localeStore from '../locale/localization'
import VideoPlayer from '../components/VideoComponent';

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
      title: localeStore.GeneralInformationScreen.title
    }
  }

  render() {
    return (
      <Container >
        <Content>
      <VideoPlayer/>  
          <Accordion dataArray={dataArray} expanded={0} />
        </Content>
      </Container>
    )
  }
}
