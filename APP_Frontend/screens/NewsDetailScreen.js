
import React, {
    Component
} from 'react';
import {Text, Button, View} from 'react-native';

export default class NewsDetail extends Component {
 static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam( 'title', 'News Detail'),
        };
    };

 render() {
    return (
    <View style={{flex: 1}}>
    <Text > news detail </Text>
  
    </View>
    );
 } 
}