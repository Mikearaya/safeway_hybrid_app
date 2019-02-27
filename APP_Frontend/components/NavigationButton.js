import React, { Component } from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {Button, Text} from 'react-native';


export default class NavigationButton extends Component {

    render() {
        return (
        <Button
            onPress={() => this.props.sideBar.toggleDrawer()}
            title="mike"
            color="#fff"
        >
            <FontAwesome>{Icons.newspaper }</FontAwesome>
            <Text>Menu</Text>
        </Button>
        )
    }
}
