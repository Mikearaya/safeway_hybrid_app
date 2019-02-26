import React, { Component } from 'react';
import {Text} from 'react-native';


export default class GeneralInformationsScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('title', 'General Informations')
        }
    };


    render() {
        return (
            <Text>General Informations</Text>
        )
    }

}
