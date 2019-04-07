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
import { Container, Content } from "native-base";
import localeStore from "../locale/localization";
import NavigationButton from "../components/NavigationButton";
import ListViewComponent from "../components/ListViewComponent";
import CountryFilterDropdown from "../components/CountryFilterDropdown";
import { connect } from "react-redux";
import { changeFilterCountry } from "../redux/app-redux";
var Enviroment = require("../global.js");

class AgenciesListScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			agencies: []
		};
	}
	static navigationOptions = ({ navigation }) => {
		return {
			headerRight: <CountryFilterDropdown />,
			headerLeft: <NavigationButton sideBar={navigation} />
		};
	};

	render() {
		return (
			<Container>
				<Content>
					<FlatList
						data={this.state.agencies}
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
				</Content>
			</Container>
		);
	}

	componentDidMount() {
		let url = `${Enviroment.API_URL}/agencies`;

		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({ agencies: data });
			})
			.catch(error => alert(JSON.stringify(error.message)));
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
