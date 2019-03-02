import React, { Component } from 'react'
import { Text, FlatList } from 'react-native'
import { Container, Content, List, ListItem, Left, Thumbnail, Body, Right, Icon } from 'native-base';



export default class EmergencyContactsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Emergency Contacts')
    }
  }


   emergencyContactsList = [
    {
      contactName: 'saudi arabia embassy',
      address: 'addis ababa, Ethiopia',
      image: './../assets/images/saudi_embassy_log.jpg',
      key: '1'
    },
    {
      contactName: 'Thiopia embassy',
      address: 'jidah, saudi arabya',
      image: './../assets/images/saudi_embassy_log.jpg',
      key: '2'
    },
     {
       contactName: 'saudi arabia embassy',
       address: 'addis ababa, Ethiopia',
       image: './../assets/images/saudi_embassy_log.jpg',
       key: '3'
     },
     {
       contactName: 'Thiopia embassy',
       address: 'jidah, saudi arabya',
       image: './../assets/images/saudi_embassy_log.jpg',
       key: '4'
     },
     {
       contactName: 'saudi arabia embassy',
       address: 'addis ababa, Ethiopia',
       image: './../assets/images/saudi_embassy_log.jpg',
       key: '5'
     },
     {
       contactName: 'Thiopia embassy',
       address: 'jidah, saudi arabya',
       image: './../assets/images/saudi_embassy_log.jpg',
       key: '6'
     },
     {
       contactName: 'saudi arabia embassy',
       address: 'addis ababa, Ethiopia',
       image: './../assets/images/saudi_embassy_log.jpg',
       key: '7'
     },
     {
       contactName: 'Thiopia embassy',
       address: 'jidah, saudi arabya',
       image: './../assets/images/saudi_embassy_log.jpg',
       key: '8'
     },
     {
       contactName: 'saudi arabia embassy',
       address: 'addis ababa, Ethiopia',
       image: './../assets/images/saudi_embassy_log.jpg',
       key: '9'
     },
     {
       contactName: 'Thiopia embassy',
       address: 'jidah, saudi arabya',
       image: './../assets/images/saudi_embassy_log.jpg',
       key: '10'
     },
     {
       contactName: 'saudi arabia embassy',
       address: 'addis ababa, Ethiopia',
       image: './../assets/images/saudi_embassy_log.jpg',
       key: '11'
     },
     {
       contactName: 'Thiopia embassy',
       address: 'jidah, saudi arabya',
       image: './../assets/images/saudi_embassy_log.jpg',
       key: '12'
     }
  ]

  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={this.emergencyContactsList}
          renderItem={({item}) => 
          <ListItem avatar>
              <Left>
                <Thumbnail source={require('./../assets/images/saudi_embassy_log.jpg')} 
                 />
              </Left>
              <Body>
                <Text>{item.title}</Text>
                <Text note>
                  {item.address}
                </Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem> }
          />
            
        </Content>
      </Container>
    )
  }
}
