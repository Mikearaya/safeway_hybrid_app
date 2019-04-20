/*
 * @CreateTime: Apr 7, 2019 10:05 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 10:05 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import { Container } from "native-base";
import localeStore from "../locale/localization";
import DetailListViewComponent from "../components/DetailListViewComponent";
var Enviroment = require("../global.js");
import { Rating, AirbnbRating } from "react-native-ratings";
import { ActivityIndicator } from "react-native";

const detailInformation = {
	name: "Ethiopian Embassy",
	address: "Riyad, Saudi arabia",
	phoneNumber: "0912669988",
	email: "mikaelaraya12@gmail.com"
};

export default class AgencyDetailScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			agencyDetail: {},
			isLoading: true
		};
	}
	static navigationOptions = ({ navigation }) => {
		return {
			title: localeStore.AgencyDetail.title
		};
	};
	render() {
		return (
			<Container>
				<DetailListViewComponent
					style={{ flex: 1 }}
					item={this.state.agencyDetail}
				/>
				<ActivityIndicator
					animating={this.state.isLoading}
					size="large"
					color="#0000ff"
				/>
				<AirbnbRating
					style={{ flex: 1 }}
					count={5}
					defaultRating={3}
					size={20}
				/>
			</Container>
		);
	}

	componentDidMount() {
		const { state } = this.props.navigation;
		let url = `${Enviroment.API_URL}/agencies/${state.params.id}`;
		this.setState({ isLoading: true });
		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({
					agencyDetail: data.agency,
					isLoading: false
				});
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}
}
