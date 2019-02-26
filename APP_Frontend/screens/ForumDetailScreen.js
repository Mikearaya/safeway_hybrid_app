import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';


export default class ForumDetailScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            'title': navigation.getParam('title', 'Forum View')
            };
    };

    render() {
        return (
<View style={{flex: 1, justifyContent: 'space-between',}}>

        <Text > Forum Detail </Text>
        <View >
        <Button 
            title='Create Post'
            onPress={() => this.props.navigation.navigate('ChatForm')}
        />
        </View>
    

    </View>
        )
    }
}
