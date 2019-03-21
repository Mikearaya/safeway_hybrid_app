import React, { Component } from 'react'
import { ListItem, Left, Thumbnail, Body, Text, Right, Icon } from 'native-base'

export default class ListViewComponent extends Component {
  render() {
    return (
      <ListItem onPress={() => this.props.navigation.navigate(this.props.navigateTo, {id : this.props.id})} avatar>
        <Left>
          <Thumbnail source={this.props.images} />
        </Left>
        <Body>
          <Text>{this.props.name}</Text>
          <Text note>{this.props.address}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    )
  }
}
