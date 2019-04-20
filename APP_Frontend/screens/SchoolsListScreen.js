/*
 * @CreateTime: Apr 7, 2019 11:37 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 11:37 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container, Content, View, Icon, Input } from "native-base";
import localeStore from "../locale/localization";
import NavigationButton from "../components/NavigationButton";
import ListViewComponent from "../components/ListViewComponent";
import CountryFilterDropdown from "../components/CountryFilterDropdown";
import { changeFilterCountry } from "../redux/app-redux";
import { connect } from "react-redux";
import { StyleSheet, ActivityIndicator } from "react-native";
import RegionFilterDropdown from "../components/RegionFilterDropdown";

var Enviroment = require("../global.js");

const styles = StyleSheet.create({
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

class SchoolsListScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			schools: [],
			searchText: "",
			isLoading: true
		};
	}
	static navigationOptions = ({ navigation }) => {
		return {
			headerRight: <RegionFilterDropdown />,
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
								navigateTo={"SchoolDetail"}
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
		let url = `${Enviroment.API_URL}/schools`;
		this.setState({ isLoading: true });

		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					schools: data,
					isLoading: false
				});
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}

	getData() {
		let x = this.state.schools.filter(s =>
			s.name
				.toString()
				.toLowerCase()
				.includes(this.state.searchText.toLowerCase())
		);

		if (this.props.region.toUpperCase() !== "ALL") {
			x = x.filter(t => t.region.toString() === this.props.region.toString());
		}

		return x;
	}
}

const mapStateToProps = state => {
	return state;
};

const mapDispatchToProps = dispatch => {
	return {
		changeFilterCountry: text => dispatch(changeFilterCountry(text))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SchoolsListScreen);
