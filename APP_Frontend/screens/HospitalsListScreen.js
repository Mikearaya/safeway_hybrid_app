/*
 * @CreateTime: Apr 7, 2019 11:36 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 11:36 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Container, Content, Textarea, View, Input, Icon } from "native-base";
import localeStore from "../locale/localization";
import NavigationButton from "../components/NavigationButton";
import ListViewComponent from "../components/ListViewComponent";
import RegionFilterDropdown from "../components/RegionFilterDropdown";
import { changeFilterRegion } from "../redux/app-redux";
import { connect } from "react-redux";
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
	},
	content: { flex: 1, margin: 0, padding: 0 },
	container: { flex: 1 }
});

class HospitalsListScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hospitals: [],
			region: this.props.region,
			filteredHospitals: [],
			searchText: "",
			getData: ""
		};
		this.props.hospitalsData;
	}
	static navigationOptions = ({ navigation }) => {
		return {
			headerRight: <RegionFilterDropdown />,
			headerLeft: <NavigationButton sideBar={navigation} />
		};
	};

	render() {
		return (
			<Container style={styles.container}>
				<Content style={styles.content}>
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
								value={this.state.searchText}
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
								navigateTo={"HospitalDetail"}
							/>
						)}
						keyExtractor={(item, index) => index.toString()}
					/>
				</Content>
			</Container>
		);
	}

	getData() {
		let x = this.state.hospitals.filter(s =>
			s.name
				.toString()
				.toLowerCase()
				.includes(this.state.searchText.toLowerCase())
		);

		if (this.props.region !== "ALL") {
			x = x.filter(t => t.region.toString() === this.props.region.toString());
		}

		return x;
	}

	componentDidMount() {
		let url = `${Enviroment.API_URL}/hospitals`;

		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					hospitals: data
				});
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}
}

const mapStateToProps = state => {
	return state;
};

const mapDispatchToProps = dispatch => {
	return {
		changeFilterRegion: text => {
			dispatch(changeFilterRegion(text));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HospitalsListScreen);
