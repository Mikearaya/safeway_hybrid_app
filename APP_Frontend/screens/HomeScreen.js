import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import { Container } from "native-base";
import localeStore from "../locale/localization";
import NavigationButton from "../components/NavigationButton";
import NewsCard from "../components/NewsCard";
import config from "react-global-configuration";
import { AsyncStorage } from "react-native";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	}
});

var Enviroment = require("../global.js");

export default class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: localeStore.NewsScreen.title,
			headerLeft: <NavigationButton sideBar={navigation} />
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}

	render() {
		return (
			<Container style={styles.container}>
				<FlatList
					keyExtractor={(item, index) => index.toString()}
					data={this.state.posts}
					renderItem={({ item }) => item}
				/>
			</Container>
		);
	}

	componentDidMount() {
		let url = `${Enviroment.API_URL}/news`;

		fetch(url)
			.then(result => result.json())
			.then(data => {
				let posts = data.map((post, index) => {
					return (
						<NewsCard newsItems={post} navigation={this.props.navigation} />
					);
				});
				setStoreItem("posts", data);
				this.setState("posts", data);
				const post = getStoreItem("posts");
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}
}

setStoreItem = async (item, value) => {
	this.setState("posts", value);
	alert(JSON.stringify(value));
	await AsyncStorage.setItem(item, JSON.stringify(value));
};

getStoreItem = async item => {
	const store = await AsyncStorage.getItem(item);

	return JSON.parse(store);
};
