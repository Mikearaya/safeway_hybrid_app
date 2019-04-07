/*
 * @CreateTime: Apr 7, 2019 10:06 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 10:06 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import { Text, Image, StyleSheet, View, Dimensions } from "react-native";
import { Container, Content } from "native-base";

import AudioPlayer from "../components/AudioPlayer";
import VideoPlayer from "../components/VideoComponent";
var Enviroment = require("../global.js");

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	},
	paragraphContainer: {
		marginTop: 20,
		paddingLeft: 20,
		paddingRight: 20
	},
	image: {
		height: 200,
		width: width
	}
});

const { width } = Dimensions;
export default class ArticleScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam("articleTitle")
		};
	};

	constructor(params) {
		super(params);
		this.state = {
			article: {
				article: { content: "" }
			}
		};
	}

	render() {
		const { navigation } = this.props;

		return (
			<Container style={styles.mainContainer}>
				<View style={styles.paragraphContainer}>
					{this._renderAudio(this.state.article.audios)}
				</View>
				<Content>
					{this._renderImage(this.state.article.image)}
					{this._renderVideo(this.state.article.videos)}
				</Content>
				<Text> {this.state.article.article.content} </Text>
			</Container>
		);
	}

	_renderImage(image) {
		if (image === null || image === "") {
			return;
		} else {
			return <Image source={{ uri: image }} style={styles.image} />;
		}
	}

	_renderAudio(audio) {
		if (audio === null || audio === []) {
			return;
		} else {
			return <AudioPlayer />;
		}
	}

	_renderVideo(video) {
		if (video === null || video === "") {
			return;
		} else {
			return <VideoPlayer />;
		}
	}

	componentDidMount() {
		const { state } = this.props.navigation;

		let url = `${Enviroment.API_URL}/articles/${state.params.articleId}`;

		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					article: data
				});
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}
}
