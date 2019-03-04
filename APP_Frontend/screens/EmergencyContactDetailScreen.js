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

const styles = StyleSheet.create({
  catagoryFont: {
    color: 'lightgrey'
  },
  iconBackground: {
    backgroundColor: 'lightgreen'
  },
  listPosision: {
    paddingTop: 20,
      paddingBottom: 20,
    marginTop: 10
  }
})

export default class EmergencyContactDetailScreen extends Component {
  render() {
    return (
      <Container>
        <Content style={{flex: 1}}>
          <ListItem style={styles.listPosision} icon>
            <Left>
              <Button style={styles.iconBackground}>
                <Icon active name="call" />
              </Button>
            </Left>
            <Body>
              <Text>0912669988</Text>
              <Text style={styles.catagoryFont}>Telephone</Text>
            </Body>
          </ListItem>
          <ListItem style={styles.listPosision} icon>
            <Left>
              <Button style={styles.iconBackground}>
                <Icon active name="mail" />
              </Button>
            </Left>
            <Body>
              <Text>Mikaelaraya12@gmail.com</Text>
              <Text style={styles.catagoryFont}>Email</Text>
            </Body>
          </ListItem>
          <ListItem style={styles.listPosision} icon>
            <Left>
              <Button style={styles.iconBackground}>
                <Icon active name="compass" />
              </Button>
            </Left>
            <Body>
              <Text>Bole, Addis Ababa Ethiopia</Text>
              <Text style={styles.catagoryFont}>Address</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    )
  }
}
