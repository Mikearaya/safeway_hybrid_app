/*
 * @CreateTime: Apr 7, 2019 10:05 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 10:05 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container, Content, View, Icon, Input } from "native-base";
import localeStore from "../locale/localization";
import NavigationButton from "../components/NavigationButton";
import ListViewComponent from "../components/ListViewComponent";
import CountryFilterDropdown from "../components/CountryFilterDropdown";

import { connect } from "react-redux";
import { changeFilterCountry } from "../redux/app-redux";
import { StyleSheet, ActivityIndicator } from "react-native";

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
	},
	searchSection: {
		backgroundColor: "#46b5be"
	},
	searchIcon: {
		padding: 10,
		color: "white"
	},
	input: {
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 0,
		color: "white"
	},
	searchBox: {
		backgroundColor: "#3fa4ac",
		margin: 5,
		flex: 1,
		flexDirection: "row",
		borderRadius: 20
	}
});

var Enviroment = require("../global.js");

class AgenciesListScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			agencies: [],
			filteredAgencies: [],
			searchText: "",
			isLoading: true
		};
	}
	static navigationOptions = ({ navigation }) => {
		return {
			/* 	headerRight: <CountryFilterDropdown />, */
			headerLeft: <NavigationButton sideBar={navigation} />
		};
	};

	render() {
		return (
			<Container>
				<Content>
					<View style={styles.searchSection}>
						<View style={styles.searchBox}>
							<Icon
								style={styles.searchIcon}
								name="ios-search"
								size={20}
								color="#000"
							/>
							<Input
								style={styles.input}
								placeholderTextColor="white"
								value={this.state.title}
								onChangeText={searchText => this.setState({ searchText })}
								placeholder="Search"
							/>
						</View>
					</View>
					<FlatList
						data={this.getData()}
						renderItem={({ item }) => (
							<ListViewComponent
								id={item.ID}
								navigation={this.props.navigation}
								images={item.medias}
								name={item.name}
								address={item.address}
								navigateTo={"AgencyDetail"}
							/>
						)}
						keyExtractor={(item, index) => index.toString()}
					/>

					<ActivityIndicator
						animating={this.state.isLoading}
						size="large"
						color="#0000ff"
					/>
				</Content>
			</Container>
		);
	}

	componentDidMount() {
		let url = `${Enviroment.API_URL}/agencies`;

		this.setState({ isLoading: true });
		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({ agencies: data, isLoading: false });
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}

	getData() {
		let x = this.state.agencies.filter(
			s =>
				s.name
					.toString()
					.toLowerCase()
					.includes(this.state.searchText.toLowerCase()) ||
				s.address
					.toString()
					.toLowerCase()
					.includes(this.state.searchText.toLowerCase())
		);

		/* 		if (this.props.country.toUpperCase() !== "ALL") {
			x = x.filter(t => t.region.toString() === this.props.country.toString());
		} */

		return x;
	}
}

const mapStateToProps = state => {
	return state;
};

const mapDispatchToProps = dispatch => {
	return {
		changeFilterCountry: text => dipatch(changeFilterCountry(text))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AgenciesListScreen);
