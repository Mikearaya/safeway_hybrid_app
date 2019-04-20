/*
 * @CreateTime: Apr 7, 2019 10:08 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 10:08 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import { Container } from "native-base";
import localeStore from "../locale/localization";
import DetailListViewComponent from "../components/DetailListViewComponent";
import { ActivityIndicator } from "react-native";

var Enviroment = require("../global.js");

export default class EmergencyContactDetailScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emergencyContacts: {},
			isLoading: true
		};
	}
	static navigationOptions = ({ navigation }) => {
		return {
			title: localeStore.EmergencyContactDetailScreen.title
		};
	};

	render() {
		return (
			<Container>
				<DetailListViewComponent item={this.state.emergencyContacts} />
				<ActivityIndicator
					animating={this.state.isLoading}
					size="large"
					color="#0000ff"
				/>
			</Container>
		);
	}

	componentDidMount() {
		const { state } = this.props.navigation;
		let url = `${Enviroment.API_URL}/emergency_contacts/${state.params.id}`;

		this.setState({ isLoading: true });
		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					emergencyContacts: data.emergency_contact,
					isLoading: false
				});
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}
}
