import React, { Component } from 'react'
import { FlatList, StyleSheet, Image } from 'react-native'

import { Container } from 'native-base'
import localeStore from '../locale/localization'
import NavigationButton from '../components/NavigationButton'
import ForumCard from '../components/ForumCard'

const styles = StyleSheet.create({
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
})

const newsArray = [
  {
    title: 'Title1',
    data: `Thumbnail component works very similar to Image. `,
    postedOn: '13-04-1990',
    key: '1',
    commentCount: '345'
  },
  {
    title: 'Title2',
    data: `Thumbnail component works very similar to Image. `,
    postedOn: '13-04-1990',
    key: '2',
    commentCount: '1234'
  },
  {
    title: 'Title3',
    data: `Thumbnail component works very similar to Image. `,
    postedOn: '13-04-1990',
    key: '3',
    commentCount: '3454'
  },
  {
    title: 'Title4',
    data: `Thumbnail component works very similar to Image. `,
    postedOn: '13-04-1990',
    key: '4',
    commentCount: '14'
  },
  {
    title: 'Title5',
    data: `Thumbnail component works very similar to Image.`,
    postedOn: '13-04-1990',
    key: '5',
    commentCount: '458'
  },
  {
    title: 'Title6',
    data: `Thumbnail component works very similar to Image`,
    postedOn: '13-04-1990',
    key: '6',
    commentCount: '0912'
  }
]

export default class ForumsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.ForumScreen.title,
      headerLeft: <NavigationButton sideBar={navigation} />
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <FlatList
          data={newsArray}
          renderItem={({ item }) => (
            <ForumCard forumData={item} navigation={this.props.navigation} />
          )}
        />
      </Container>
    )
  }
}
