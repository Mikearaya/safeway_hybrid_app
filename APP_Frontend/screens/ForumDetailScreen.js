import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    StyleSheet
} from 'react-native';
import localeStore from '../locale/localization';
import { Card, CardItem } from 'native-base';

const forumnDiscussionsList = {
    topic: 'Thumbnail component works very similar to Image',
    dateCreated: '13-04-1990',
    conversations: [
        {message: 'some example message text placeholder usage', 
    datePosted: '19-09-1990',
key: '1'},
    {message: 'some example message text placeholder usage', 
    datePosted: '19-09-1990',
key: '2'
},
    {message: 'some example message text placeholder usage', 
    datePosted: '19-09-1990',
key: '3'
},
{
    message: 'some example message text placeholder usage',
    datePosted: '19-09-1990',
    key: '4'
},
{
    message: 'some example message text placeholder usage',
    datePosted: '19-09-1990',
    key: '5'
},
{
    message: 'some example message text placeholder usage',
    datePosted: '19-09-1990',
    key: '6'
},
{
    message: 'some example message text placeholder usage',
    datePosted: '19-09-1990',
    key: '7'
},
{
    message: 'some example message text placeholder usage',
    datePosted: '19-09-1990',
    key: '8'
},
{
    message: 'some example message text placeholder usage',
    datePosted: '19-09-1990',
    key: '9'
},
{
    message: 'some example message text placeholder usage',
    datePosted: '19-09-1990',
    key: '10'
}, {
    message: 'some example message text placeholder usage',
    datePosted: '19-09-1990',
    key: '11'
}, {
    message: 'some example message text placeholder usage',
    datePosted: '19-09-1990',
    key: '12'
}, {
    message: 'some example message text placeholder usage',
    datePosted: '19-09-1990',
    key: '13'
}, {
    message: 'some example message text placeholder usage',
    datePosted: '19-09-1990',
    key: '14'
}, {
    message: 'some example message text placeholder usage',
    datePosted: '19-09-1990',
    key: '15'
}, {
    message: 'some example message text placeholder usage',
    datePosted: '19-09-1990',
    key: '16'
}

    ]
}


const styles = StyleSheet.create({
    discussionContainer: {
        alignContent: 'center',
        justifyContent: 'center'
    },
    mainContainer : {
        flex: 1
    },
    postDate: {
        fontWeight: 'bold',
        color: 'lightgreen'
    }
});
export default class ForumDetailScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            'title': localeStore.ForumDetail.title
            };
    };

    render() {
        return (
<View style={{flex: 1}}>     
    <Card>
        <CardItem>
        <Text style={{fontWeight: "bold"}} > {forumnDiscussionsList.topic} </Text>
        </CardItem>
     
    </Card> 
       <FlatList
            data={forumnDiscussionsList.conversations}
            renderItem={({item}) => 
            <View style={styles.discussionContainer}>
            <Text style={styles.postDate}  >{item.datePosted}</Text>
                <Text>{item.message}</Text>
            </View>
            }
        /> 
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
