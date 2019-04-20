import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container, Content, View, Icon, Input } from "native-base";
import localeStore from "../locale/localization";
import ListViewComponent from "../components/ListViewComponent";
import NavigationButton from "../components/NavigationButton";
import CountryFilterDropdown from "../components/CountryFilterDropdown";
import { connect } from "react-redux";
import { StyleSheet, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
	navigationButton: {
		flex: 1,
		justifyContent: "flex-start"
	},
	filterComponent: {
		flex: 1
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

class EmergencyContactsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emergencyContacts: [],
			filteredDatas: [],
			searchText: "",
			isLoading: true
		};
	}
	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: (
				<NavigationButton
					sideBar={navigation}
					style={styles.navigationButton}
				/>
			)
			/* headerRight: <CountryFilterDropdown style={styles.filterComponent} /> */
		};
	};

	render() {
		return (
			<Container style={{ justifyContent: "center" }}>
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
								navigateTo={"EmergencyContactDetail"}
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
		let url = `${Enviroment.API_URL}/emergency_contacts`;
		this.setState({ isLoading: true });
		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					emergencyContacts: data,
					isLoading: false
				});
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}

	getData() {
		let x = this.state.emergencyContacts.filter(
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

		return x;
	}
}

const mapStateToProps = state => {
	return { currentCountry: state.country };
};

const mapDispatchToProps = dispatch => {
	return {
		changeFilterCountry: text => dispatch(changeFilterCountry(text))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EmergencyContactsScreen);
