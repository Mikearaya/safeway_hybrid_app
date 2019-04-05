import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container, Content } from "native-base";
import localeStore from "../locale/localization";
import ListViewComponent from "../components/ListViewComponent";
import NavigationButton from "../components/NavigationButton";
import CountryFilterDropdown from "../components/CountryFilterDropdown";
import { connect } from "react-redux";
var Enviroment = require("../global.js");

class EmergencyContactsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emergencyContacts: [],
			currentCountry: this.props.country,
			filteredDatas: []
		};
	}
	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: (
				<NavigationButton
					sideBar={navigation}
					style={{
						flex: 1,
						justifyContent: "flex-start"
					}}
				/>
			),
			headerRight: (
				<CountryFilterDropdown
					style={{
						flex: 1
					}}
				/>
			)
		};
	};

	render() {
		return (
			<Container>
				<Content>
					<FlatList
						data={this.state.filteredDatas}
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
				</Content>
			</Container>
		);
	}

	componentDidMount() {
		let url = `${Enviroment.API_URL}/emergency_contacts`;

		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					emergencyContacts: data
				});
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}

	componentDidUpdate() {
		this.state.filteredDatas = this.state.emergencyContacts.filter(
			s => s.region == this.props.currentCountry
		);
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
