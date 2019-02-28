import React, { Component } from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Icon from 'react-native-fontawesome';
import {Button, Text} from 'native-base';



export default class NavigationButton extends Component {

    render() {
        return (
        <Button
            onPress={() => this.props.sideBar.toggleDrawer()}
            title="mike"
            transparent
            
            
        >
    <FontAwesome style={{fontSize: 50}} >{Icons.eject}</FontAwesome>
        </Button>
         
        )
    }
}
