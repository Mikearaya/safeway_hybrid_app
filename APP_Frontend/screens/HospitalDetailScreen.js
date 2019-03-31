import React, { Component } from "react";
import { Container } from "native-base";
import localeStore from "../locale/localization";
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
			hospitalDetail: {}
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
			</Container>
		);
	}

	componentDidMount() {
		const { state } = this.props.navigation;
		let url = `${Enviroment.API_URL}/hospitals/${state.params.id}`;

		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					hospitalDetail: data.hospital
				});
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}
}
