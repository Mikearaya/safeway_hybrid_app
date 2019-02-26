import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Image
} from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import FontAwesome, { Icons } from 'react-native-fontawesome';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  boldFont: {
    fontWeight: 'bold'
  },
  commentContainer:{
  color: '#87838B',
  paddingBottom: 0, 
  paddingTop: 0
  }
});

const newsArray = [{
    title: 'Title1',
    data: `Thumbnail component works very similar to Image. 
`,
    key: '1'
  },
  {
    title: 'Title2',
    data: `Thumbnail component works very similar to Image. 
`,
    key: '2'
  },
  {
    title: 'Title3',
    data: `Thumbnail component works very similar to Image. 
`,
    key: '3'
  },
  {
    title: 'Title4',
    data: `Thumbnail component works very similar to Image. 
`,
    key: '4'
  }, {
    title: 'Title5',
    data: `Thumbnail component works very similar to Image.`,
    key: '5'
  }, {
    title: 'Title6',
    data: `Thumbnail component works very similar to Image`,
    key: '6'
  },
];

export default class ForumsScreen extends Component {
static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam( 'title', 'Forum'),
        };
    };

  render() {
    return (
      <Container  style={styles.container}>    
          <FlatList
          data={newsArray}
    renderItem={({item}) => 
  <Card style={{flex: 1}} >
            <CardItem button onPress={() => this.props.navigation.navigate('ForumDetail')}>
            
                <Body style={{flex: 1}} >
                  <Text style={styles.boldFont}>{item.data}</Text>
                  <Text note>April 13, 1990</Text>
      </Body>
              <Right style={{flex: 0.1}} >
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
              <CardItem bordered style={styles.commentContainer}>
              <Left>
                <Button transparent>
                  <FontAwesome>{Icons.comments}</FontAwesome>
                  <Text>1,926 comments</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
              }
/>

      </Container>
    );
  }
}

