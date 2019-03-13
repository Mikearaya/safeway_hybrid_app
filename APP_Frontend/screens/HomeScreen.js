import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { Container } from 'native-base'
import localeStore from '../locale/localization'
import NavigationButton from '../components/NavigationButton'
import NewsCard from '../components/NewsCard'

const newsArray = [
  {
    title: 'Title1',
    postDate: '13-04-1990',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions `,
    image: '../assets/images/image-not-found.jpg',
    key: '1'
  },
  {
    title: 'Title2',
    postDate: '13-04-1990',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions `,
    image: '../assets/images/image-not-found.jpg',
    key: '2'
  },
  {
    title: 'Title3',
    postDate: '13-04-1990',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions `,
    image: '../assets/images/image-not-found.jpg',
    key: '3'
  },
  {
    title: 'Title4',
    postDate: '13-04-1990',
    data: `Thumbnail component works very  to Image. It helps you to showcase an image with variuos dimensions `,
    image: '../assets/images/image-not-found.jpg',
    key: '4'
  },
  {
    title: 'Title5',
    postDate: '13-04-1990',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions`,
    image: '../assets/images/image-not-found.jpg',
    key: '5'
  },
  {
    title: 'Title6',
    postDate: '13-04-1990',
    data: `Thumbnail component works very similar to Image. It helps you to showcase an image with variuos dimensions`,
    image: './../assets/images/image-not-found.jpg',
    key: '6'
  }
]

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.NewsScreen.title,
      headerLeft: <NavigationButton sideBar={navigation} />
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <FlatList
          data={this.state.posts}
          renderItem={({ item }) => (
            <NewsCard newsItems={item} navigation={this.props.navigation} />
          )}
        />
      </Container>
    )
  }

  componentDidMount() {
    let url =
      'http://192.168.1.3/ilo_app/backend/index.php/emergency_contacts'

    fetch(url)
      .then(result => result.json())
       .then(data => {
        let posts = data.map((post, index) => {
          return (
            <NewsCard newsItems={post} navigation={this.props.navigation} />
          )
        })
        this.setState({ posts: posts })
      })
      .catch(error => alert(JSON.stringify(error.message)))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
