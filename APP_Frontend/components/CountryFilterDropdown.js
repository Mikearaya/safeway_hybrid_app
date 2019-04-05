import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown } from "react-native-material-dropdown";
import { changeFilterCountry } from "../redux/app-redux";

const data = [
	{
		value: "All"
	},
	{
		value: "Ethiopia"
	},
	{
		value: "Quatar"
	},
	{
		value: "Saudi Arabia"
	},
	{
		value: "Lebanon"
	}
];
class CountryFilterDropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			country: ""
		};
	}

	render() {
		return (
			<Dropdown
				baseColor="black"
				textColor="white"
				data={data}
				containerStyle={{ width: 200 }}
				value={this.props.currentCountry}
				onChangeText={text => {
					this.setState({ country: text });
					this.onChangeFilterCountryPress(text);
				}}
			/>
		);
	}

	onChangeFilterCountryPress = () => {
		this.props.changeFilterCountry(this.state.country);
	};
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
)(CountryFilterDropdown);
