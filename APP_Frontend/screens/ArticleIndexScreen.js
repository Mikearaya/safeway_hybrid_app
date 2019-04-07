/*
 * @CreateTime: Apr 7, 2019 10:06 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 10:06 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import { Text, View, CardItem, Icon, Right } from "native-base";
import { FlatList, StyleSheet } from "react-native";
import localeStore from "../locale/localization";
var Enviroment = require("../global.js");

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: "center",
		marginTop: 10
	},
	indexBox: {
		flex: 1,
		borderBottomWidth: 1,
		borderBottomColor: "lightgreen"
	},
	indexTitle: {
		flex: 1
	}
});

export default class ArticleIndexScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		const articleId = navigation.getParam("articleId", 0);
		return {
			title: localeStore.PolicyIndex.title
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			tableOfContent: []
		};
	}
	render() {
		const { navigation } = this.props;

		const articleId = navigation.getParam("articleId");
		return (
			<View style={styles.mainContainer}>
				<FlatList
					style={{ flex: 1 }}
					data={this.state.tableOfContent}
					renderItem={({ item }) => (
						<CardItem
							style={styles.indexBox}
							button
							onPress={() =>
								this.props.navigation.navigate("Article", {
									articleId: item.ID,
									articleTitle: item.header
								})
							}
							keyExtractor={(item, index) => index}>
							<Text style={styles.indexTitle}>
								{item.key}-{item.header}
							</Text>
							<Right>
								<Icon name="arrow-forward" />
							</Right>
						</CardItem>
					)}
				/>
			</View>
		);
	}

	componentDidMount() {
		const { state } = this.props.navigation;

		let url = `${Enviroment.API_URL}/articles/content/${
			state.params.CATAGORY_ID
		}`;

		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					tableOfContent: data
				});
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}
}
