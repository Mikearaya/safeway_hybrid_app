import React, { Component } from "react";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { Button, Text, Icon } from "native-base";

export default class NavigationButton extends Component {
  render() {
    return (
      <Button onPress={() => this.props.sideBar.toggleDrawer()} transparent>
        <Icon style={{ fontSize: 40, color: "white" }} name="menu" />
      </Button>
    );
  }
}
