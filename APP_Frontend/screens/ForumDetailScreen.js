/*
 * @CreateTime: Apr 7, 2019 11:22 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 11:24 AM
 * @Description: Modify Here, Please
 */
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
	UIManager,
	ActivityIndicator
} from "react-native";
import localeStore from "../locale/localization";
import { Form, Textarea, Button, Icon, ListItem, Body } from "native-base";
import Toast from "react-native-root-toast";
var Enviroment = require("../global.js");

const { State: TextInputState } = TextInput;

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
	},
	forumTitle: { fontWeight: "bold", color: "lightgreen" },
	commentBox: { flexDirection: "row" },
	commentTextBox: { flex: 1 },
	commentButton: { backgroundColor: "limegreen" }
});

export default class ForumDetailScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments_list: [],
			shift: new Animated.Value(0),
			title: "",
			refresh: false,
			forumId: "",
			isLoading: false
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
		this.state.comments_list.push({
			message: this.state.title,
			datePosted: new Date().toString(),
			key: (this.state.comments_list.length + 1).toString()
		});
		this.setState({ title: "" });

		this.setState({
			refresh: !this.state.refresh
		});
		Keyboard.dismiss();
		fetch(`${Enviroment.API_URL}/forum_comments`, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			method: "POST",
			body: JSON.stringify({
				forum_comments: {
					FORUM_ID: this.state.forumId,
					comment: this.state.title
				}
			})
		})
			.then(response => response.json())
			.then(responseJson => {
				Toast.show("Complain added successfully", toast);
				this.setState({ title: "", refresh: !this.state.refresh });
			})
			.catch(function(error) {});
	}

	render() {
		const { shift } = this.state;
		return (
			<Animated.View
				style={[styles.container, { transform: [{ translateY: shift }] }]}>
				<FlatList
					data={this.state.comments_list}
					renderItem={({ item }) => (
						<ListItem>
							<Body>
								<Text style={styles.forumTitle}>{item.date_added}</Text>
								<Text note>{item.comment}</Text>
							</Body>
						</ListItem>
					)}
					keyExtractor={(item, index) => index.toString()}
				/>
				<View>
					<Form style={styles.commentBox}>
						<View style={styles.commentTextBox}>
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
								style={styles.commentButton}>
								<Icon name="send" />
							</Button>
						</View>
					</Form>
				</View>
				<ActivityIndicator
					animating={this.state.isLoading}
					size="large"
					color="#0000ff"
				/>
			</Animated.View>
		);
	}

	componentDidMount() {
		const { state } = this.props.navigation;

		let url = `${Enviroment.API_URL}/forum_comments/${state.params.id}`;
		this.setState({ isLoading: true });

		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					comments_list: data,
					forumId: state.params.id,
					isLoading: false
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
