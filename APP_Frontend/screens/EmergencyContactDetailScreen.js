import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Button
} from 'native-base'
import { StyleSheet } from 'react-native'
import localeStore from '../locale/localization';
import DetailListViewComponent from '../components/DetailListViewComponent';


const detailInformation = {
  name: 'Ethiopian Embassy',
  address: 'Riyad, Saudi arabia',
  phoneNumber: '0912669988',
  email: 'mikaelaraya12@gmail.com'
};

export default class EmergencyContactDetailScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: localeStore.EmergencyContactDetailScreen.title
        }
    }
  render() {
    return (
      <Container>
        <DetailListViewComponent item={detailInformation}/>
      </Container>
    )
  }
}
