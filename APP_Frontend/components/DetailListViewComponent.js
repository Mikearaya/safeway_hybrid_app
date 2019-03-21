import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { List, Header, Text, ListItem, Left, Button, Icon, Body } from 'native-base';
import localeStore from '../locale/localization';

styles = StyleSheet.create({
  listHeader: {
    backgroundColor: 'lightgreen',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    flex: 1
  },
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
export default class DetailListViewComponent extends Component {
  render() {
  
    return (
      <List style={styles.list}>
        <Header style={styles.listHeader}>
          <Text>{this.props.item.name}</Text>
        </Header>
        <ListItem style={styles.listPosision} icon>
          <Left>
            <Button style={styles.iconBackground}>
              <Icon active name="call" />
            </Button>
          </Left>
          <Body>
            <Text>{this.props.item.phone_number}</Text>
            <Text style={styles.catagoryFont}>
              {localeStore.EmergencyContactDetailScreen.telephone}
            </Text>
          </Body>
        </ListItem>
        <ListItem style={styles.listPosision} icon>
          <Left>
            <Button style={styles.iconBackground}>
              <Icon active name="mail" />
            </Button>
          </Left>
          <Body>
            <Text>{this.props.item.email}</Text>
            <Text style={styles.catagoryFont}>
              {localeStore.EmergencyContactDetailScreen.email}
            </Text>
          </Body>
        </ListItem>
        <ListItem style={styles.listPosision} icon>
          <Left>
            <Button style={styles.iconBackground}>
              <Icon active name="compass" />
            </Button>
          </Left>
          <Body>
            <Text>{this.props.item.address}</Text>
            <Text style={styles.catagoryFont}>
              {localeStore.EmergencyContactDetailScreen.address}
            </Text>
          </Body>
        </ListItem>
      </List>
    )
  }
}
