/*
 * @CreateTime: Apr 7, 2019 10:07 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 10:07 AM
 * @Description: Modify Here, Please
 */
import React from "react";
import { Container, Content } from "native-base";
import NavigationButton from "../components/NavigationButton";
import localeStore from "../locale/localization";
import { FlatList } from "react-native";
import ArticleList from "../components/ArticleListComponent";
var Enviroment = require("../global.js");
import { connect } from "react-redux";
import { StyleSheet } from "react-native";

import CountryFilterDropdown from "../components/CountryFilterDropdown";
import { changeFilterCountry } from "../redux/app-redux";

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: "#f2f2f2" }
});

const mapStateToProps = state => {
	return {
		currentCountry: state.country
	};
};

const mapDispatchToProps = dipatch => {
	return {
		changeFilterCountry: text => dipatch(changeFilterCountry(text))
	};
};
class ArticlesScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			catagories: [],
			country: this.props.currentCountry,
			filteredDatas: []
		};
	}
	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: <NavigationButton sideBar={navigation} />,
			headerRight: <CountryFilterDropdown />
		};
	};

	render() {
		return (
			<Container style={styles.container}>
				<Content>
					<FlatList
						data={this.state.filteredDatas}
						renderItem={({ item }) => (
							<ArticleList
								onPress={() => this._catagorySelected(item)}
								catagory={item}
								articleCount={item.articleCount}
							/>
						)}
						keyExtractor={(item, index) => index.toString()}
					/>
				</Content>
			</Container>
		);
	}

	componentDidMount() {
		let url = `${Enviroment.API_URL}/article_catagory`;
		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					catagories: data,
					filteredDatas: data
				});
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}

	_catagorySelected(selectedCatagory) {
		const catagory = {
			articleId: selectedCatagory.ID,
			articleTitle: selectedCatagory.name
		};

		if (selectedCatagory.totalArticles == 1) {
			this.props.navigation.navigate("Article", catagory);
		} else {
			this.props.navigation.navigate("ArticleIndex", selectedCatagory);
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ArticlesScreen);
