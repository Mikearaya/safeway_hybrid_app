import React, { Component } from 'react'
import { Text, Image, StyleSheet, View, Dimensions } from 'react-native'
import { Container, Content } from 'native-base'

import AudioPlayer from '../components/AudioPlayer'
import VideoPlayer from '../components/VideoComponent'

const article = {
  photo: './../assets/images/image-not-found.jpg',
  audio: 'sds',
  video: ''
}
const paragraph = `To support React's concept of unidirectional data flow (which might be contrasted with AngularJS's bidirectional flow), the Flux architecture represents an alternative to the popular model-view-controller architecture. 
Flux features actions which are sent through a central dispatcher to a store, and changes to the store are propagated back to the view[22]. When used with React, this propagation is 
accomplished through component properties. Flux can be considered a variant of the observer pattern. React component under the Flux architecture should not directly modify any props passed to it, but should be passed c`

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  paragraphContainer: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

const { width } = Dimensions
export default class ArticleScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('articleTitle')
    }
  }

  render() {
    const { navigation } = this.props

    const articleId = navigation.getParam('articleId', '0')
    return (
      <Container style={styles.mainContainer}>
        <Content>
          {this._renderImage(article.photo)}
          {this._renderVideo(article.video)}
          <View style={styles.paragraphContainer}>
            
            {this._renderAudio(article.audio)}
            <Text> {paragraph} </Text>
            <Text> {paragraph} </Text>
            <Text> {paragraph} </Text>
            <Text> {paragraph} </Text>
          </View>
        </Content>
      </Container>
    )
  }

  _renderImage(image) {
    if (image === null || image === '') {
      return
    } else {
      return (
        <Image
          source={require('./../assets/images/image-not-found.jpg')}
          style={{
            height: 200,
            width: width
          }}
        />
      )
    }
  }

  _renderAudio(audio) {
    if (audio === null || audio === '') {
      return
    } else {
      return <AudioPlayer />
    }
  }

  _renderVideo(video) {
    if (video === null || video === '') {
      return
    } else {
      return <VideoPlayer />
    }
  }
}
