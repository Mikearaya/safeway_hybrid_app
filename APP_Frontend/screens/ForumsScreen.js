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

  constructor(props) {
    super(props)
    this.state = {
      forums: []
    }
  }
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
          data={this.state.forums}
          renderItem={({ item }) => (
            <ForumCard forumData={item} navigation={this.props.navigation} />
          )}
        />
      </Container>
    )
  }

    }

  componentDidMount() {
    let url =
      'http://192.168.1.3/ilo_app/backend/index.php/forums'

    fetch(url)
      .then(result => result.json())
       .then(data => {
        let posts = data.map((post, index) => {
          return (
            <ForumCard forumData={post} navigation={this.props.navigation} />
          )
        })
        this.setState({ forums: posts })
      })
      .catch(error => alert(JSON.stringify(error.message)))
  }
}
}
