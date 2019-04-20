import React, { Component } from "react";
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { Container } from "native-base";
import localeStore from "../locale/localization";
import NavigationButton from "../components/NavigationButton";
import ForumCard from "../components/ForumCard";

var Enviroment = require("../global.js");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: "#fff"
	},
	boldFont: {
		fontWeight: "bold"
	},
	commentContainer: {
		color: "#87838B",
		paddingBottom: 0,
		paddingTop: 0
	}
});

export default class ForumsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			forums: [],
			isLoading: true
		};
	}
	static navigationOptions = ({ navigation }) => {
		return {
			title: localeStore.ForumScreen.title,
			headerLeft: <NavigationButton sideBar={navigation} />
		};
	};

	render() {
		return (
			<Container style={styles.container}>
				<FlatList
					data={this.state.forums}
					renderItem={({ item }) => (
						<ForumCard forumData={item} navigation={this.props.navigation} />
					)}
					keyExtractor={(item, index) => index.toString()}
				/>
				<ActivityIndicator
					animating={this.state.isLoading}
					size="large"
					color="#0000ff"
				/>
			</Container>
		);
	}

	componentDidMount() {
		let url = `${Enviroment.API_URL}/forums`;
		this.setState({ isLoading: true });
		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					forums: data,
					isLoading: false
				});
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}
}
