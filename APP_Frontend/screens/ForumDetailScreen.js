import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Animated,
  Dimensions,
  Keyboard,
  UIManager
} from 'react-native'
import localeStore from '../locale/localization'
import { Form, Textarea, Button, Icon } from 'native-base'

const forumnDiscussionsList = {
  topic: 'Thumbnail component works very similar to Image',
  dateCreated: '13-04-1990',
  conversations: [
    {
      message: 'some example message text placeholder usage',
      datePosted: '19-09-1990',
      key: '1'
    },
    {
      message: 'some example message text placeholder usage',
      datePosted: '19-09-1990',
      key: '2'
    },
    {
      message: 'some example message text placeholder usage',
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
    },
    {
      message: 'some example message text placeholder usage',
      datePosted: '19-09-1990',
      key: '11'
    },
    {
      message: 'some example message text placeholder usage',
      datePosted: '19-09-1990',
      key: '12'
    },
    {
      message: 'some example message text placeholder usage',
      datePosted: '19-09-1990',
      key: '13'
    },
    {
      message: 'some example message text placeholder usage',
      datePosted: '19-09-1990',
      key: '14'
    },
    {
      message: 'some example message text placeholder usage',
      datePosted: '19-09-1990',
      key: '15'
    },
    {
      message: 'some example message text placeholder usage',
      datePosted: '19-09-1990',
      key: '16'
    }
  ]
}

const { State: TextInputState } = TextInput

/* const styles = StyleSheet.create({
  discussionContainer: {
    flex: 1,
    padding: 10
  },
  mainContainer: {
    flex: 1
  },
  postDate: {
    fontWeight: 'bold'
  }
}) */
export default class ForumDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.ForumDetail.title
    }
  }

  state = {
    shift: new Animated.Value(0),
    title: '',
    refresh: false
  }

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener(
      'keyboardDidShow',
      this.handleKeyboardDidShow
    )
    this.keyboardDidHideSub = Keyboard.addListener(
      'keyboardDidHide',
      this.handleKeyboardDidHide
    )
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove()
    this.keyboardDidHideSub.remove()
  }

  addMessage() {
    forumnDiscussionsList.conversations.push({
      message: this.state.title,
      datePosted: new Date().toString(),
      key: (forumnDiscussionsList.conversations.length + 1).toString()
    })
    this.setState({ title: '' })
    Keyboard.dismiss()
    this.setState({
      refresh: !this.state.refresh
    })
  }

  render() {
    const { shift } = this.state
    return (
      <Animated.View
        style={[styles.container, { transform: [{ translateY: shift }] }]}
      >
        <FlatList
          data={forumnDiscussionsList.conversations}
          renderItem={({ item }) => (
            <View style={styles.discussionContainer}>
              <Text style={styles.postDate}>{item.datePosted}</Text>
              <Text>{item.message}</Text>
            </View>
          )}
        />
        <View>
          <Form style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Textarea
                value={this.state.title}
                style={styles.textInput}
                onChangeText={title => this.setState({ title })}
                placeholder="Enter your comment"
              />
            </View>
            <View>
              <Button
                rounded
                disabled={!this.state.title}
                onPress={() => this.addMessage()}
                style={{ backgroundColor: 'limegreen' }}
              >
                <Icon name="send" />
              </Button>
            </View>
          </Form>
        </View>
      </Animated.View>
    )
  }

  handleKeyboardDidShow = event => {
    const { height: windowHeight } = Dimensions.get('window')
    const keyboardHeight = event.endCoordinates.height
    const currentlyFocusedField = TextInputState.currentlyFocusedField()
    UIManager.measure(
      currentlyFocusedField,
      (originX, originY, width, height, pageX, pageY) => {
        const fieldHeight = height
        const fieldTop = pageY
        const gap = windowHeight - keyboardHeight - (fieldTop + fieldHeight)
        if (gap >= 0) {
          return
        }
        Animated.timing(this.state.shift, {
          toValue: gap,
          duration: 500,
          useNativeDriver: true
        }).start()
      }
    )
  }

  handleKeyboardDidHide = () => {
    Animated.timing(this.state.shift, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start()
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  textInput: {
    backgroundColor: 'white',
    height: 40
  }
})
