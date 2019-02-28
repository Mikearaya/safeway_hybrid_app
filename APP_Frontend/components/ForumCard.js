import React, { Component } from 'react'
import {
  View,
  Card,
  CardItem,
  Body,
  Text,
  Right,
  Icon,
  Left,
  Button
} from 'native-base';

import {StyleSheet} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome'

const styles = StyleSheet.create({
    forumBody: {    
        flex: 1
    },
    rightIcon: { 
        flex: 0.1 
    },
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff'
    },
    boldFont: {
        fontWeight: 'bold'
    },
    commentContainer: {
        color: '#87838B',
        paddingBottom: 0,
        paddingTop: 0
    }
});

export default class ForumCard extends Component {
  render() {
    return (
      <View>
        <Card style={styles.forumBody}>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('ForumDetail')}
          >
            <Body>
              <Text style={styles.boldFont}>{this.props.forumData.data}</Text>
              <Text >{this.props.forumData.postedOn}</Text>
            </Body>
            <Right style={styles.rightIcon}>
              <Icon name="arrow-forward" />
            </Right>
          </CardItem>
          <CardItem bordered style={styles.commentContainer}>
            <Left>
              <Button transparent>
                <FontAwesome>{Icons.comments}</FontAwesome>
                <Text>{this.props.forumData.commentCount} </Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </View>
    )
  }
}
