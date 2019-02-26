import React, { Component } from 'react';
import {Text} from 'react-native';

export default class PolicyViewScreen extends Component {
     static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam( 'title', 'Imigration Policy')
        };
    };

    render() {
        return (
            <Text>Policies</Text>
        );
    }
}