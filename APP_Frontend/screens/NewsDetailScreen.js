/*
 * @CreateTime: Apr 7, 2019 11:36 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 11:37 AM
 * @Description: Modify Here, Please
 */
var Enviroment = require("../global.js");
import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { Container } from "native-base";

const imageLocation = "./../assets/images/image-not-found.jpg";
var Enviroment = require("../global.js");

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		marginTop: 10
	},
	paragraphContainer: {
		padding: 23
	},
	image: { display: "flex", width: width, height: height / 3, padding: 3 }
});

export default class NewsDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsDetail: {},
			header: "",
			image: "",
			content: ""
		};
	}
	static navigationOptions = ({ navigation }) => {};

	render() {
		return (
			<Container style={styles.mainContainer}>
				<Image
					source={{
						uri: this.state.image
							? `${Enviroment.RESOURCE_URL}/${this.state.image}`
							: "http://192.168.1.4/ilo_app/backend/application/uploads/media/permanent/article/46/english/Screenshot_from_2019-03-34_27-59-17,png"
					}}
					style={styles.image}
				/>

				<View style={styles.paragraphContainer}>
					<Text> {this.state.content} </Text>
				</View>
			</Container>
		);
	}

	componentDidMount() {
		const { state } = this.props.navigation;
		let url = `${Enviroment.API_URL}/news/${state.params.id}`;

		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					content: data.article.content,
					image: data.image
				});
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}
}
