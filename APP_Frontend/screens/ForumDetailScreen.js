import React, { Component } from "react";
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
} from "react-native";
import localeStore from "../locale/localization";
import { Form, Textarea, Button, Icon, ListItem, Body } from "native-base";
var Enviroment = require("../global.js");

const { State: TextInputState } = TextInput;

export default class ForumDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments_list: [],
      shift: new Animated.Value(0),
      title: "",
      refresh: false
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.ForumDetail.titles
    };
  };

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener(
      "keyboardDidShow",
      this.handleKeyboardDidShow
    );
    this.keyboardDidHideSub = Keyboard.addListener(
      "keyboardDidHide",
      this.handleKeyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  addMessage() {
    forumnDiscussionsList.conversations.push({
      message: this.state.title,
      datePosted: new Date().toString(),
      key: (forumnDiscussionsList.conversations.length + 1).toString()
    });
    this.setState({ title: "" });
    Keyboard.dismiss();
    this.setState({
      refresh: !this.state.refresh
    });
  }

  render() {
    const { shift } = this.state;
    return (
      <Animated.View
        style={[styles.container, { transform: [{ translateY: shift }] }]}
      >
        <FlatList
          data={this.state.comments_list}
          renderItem={({ item }) => (
            <ListItem>
              <Body>
                <Text style={{ fontWeight: "bold", color: "lightgreen" }}>
                  {item.date_added}
                </Text>
                <Text note>{item.comment}</Text>
              </Body>
            </ListItem>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <View>
          <Form style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Textarea
                value={this.state.title}
                style={styles.textInput}
                onChangeText={comments => this.setState({ comments })}
                placeholder="Enter your comment"
              />
            </View>
            <View>
              <Button
                rounded
                disabled={!this.state.title}
                onPress={() => this.addMessage()}
                style={{ backgroundColor: "limegreen" }}
              >
                <Icon name="send" />
              </Button>
            </View>
          </Form>
        </View>
      </Animated.View>
    );
  }

  componentDidMount() {
    const { state } = this.props.navigation;
    let url = `${Enviroment.API_URL}/forum_comments/${state.params.id}`;

    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({
          comments_list: data
        });
      })
      .catch(error => alert(JSON.stringify(error.message)));
  }

  handleKeyboardDidShow = event => {
    const { height: windowHeight } = Dimensions.get("window");
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(
      currentlyFocusedField,
      (originX, originY, width, height, pageX, pageY) => {
        const fieldHeight = height;
        const fieldTop = pageY;
        const gap = windowHeight - keyboardHeight - (fieldTop + fieldHeight);
        if (gap >= 0) {
          return;
        }
        Animated.timing(this.state.shift, {
          toValue: gap,
          duration: 500,
          useNativeDriver: true
        }).start();
      }
    );
  };

  handleKeyboardDidHide = () => {
    Animated.timing(this.state.shift, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start();
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    height: "100%",
    justifyContent: "space-around",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%"
  },
  textInput: {
    backgroundColor: "white",
    height: 40
  }
});
