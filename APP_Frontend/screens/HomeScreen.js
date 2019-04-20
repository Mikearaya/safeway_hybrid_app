import React from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
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
				<ActivityIndicator
					animating={this.state.isLoading}
					size="large"
					color="#0000ff"
				/>
			</Container>
		);
	}

	componentDidMount() {
		let url = `${Enviroment.API_URL}/news`;

		this.setState({ isLoading: true });

		fetch(url)
			.then(result => result.json())
			.then(data => {
				let posts = data.map((post, index) => {
					return (
						<NewsCard
							newsItems={post}
							style={{ width: "100%" }}
							navigation={this.props.navigation}
						/>
					);
				});
				this.setState({ posts: posts, isLoading: false });
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}
}
