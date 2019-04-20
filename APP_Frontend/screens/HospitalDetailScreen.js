import React, { Component } from "react";
import { Container } from "native-base";
import localeStore from "../locale/localization";
import { ActivityIndicator } from "react-native";
import DetailListViewComponent from "../components/DetailListViewComponent";
var Enviroment = require("../global.js");

const detailInformation = {
	name: "Ethiopian Embassy",
	address: "Riyad, Saudi arabia",
	phoneNumber: "0912669988",
	email: "mikaelaraya12@gmail.com"
};

export default class HospitalDetailScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hospitalDetail: {},
			isLoading: true
		};
	}

	static navigationOptions = ({ navigation }) => {
		return {
			title: localeStore.HospitalDetail.title
		};
	};
	render() {
		return (
			<Container>
				<DetailListViewComponent item={this.state.hospitalDetail} />
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
		let url = `${Enviroment.API_URL}/hospitals/${state.params.id}`;
		this.setState({ isLoading: true });

		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					hospitalDetail: data.hospital,
					isLoading: false
				});
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}
}
