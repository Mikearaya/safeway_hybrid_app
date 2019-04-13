import React, { Component } from "react";
const Enviroment = require("./../global.js");
import { Dropdown } from "react-native-material-dropdown";
import { connect } from "react-redux";
import { changeFilterRegion } from "./../redux/app-redux";

class RegionFilterDropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			regions: []
		};
	}
	render() {
		return (
			<Dropdown
				label="Select region"
				data={this.state.regions}
				containerStyle={{ width: 200 }}
				value={this.props.currentRegion}
				valueExtractor={data => data.name}
				onChangeText={text => {
					this.setState({ region: text });
					this.onChangeRegionFilter(text);
				}}
			/>
		);
	}

	componentDidMount() {
		let url = `${Enviroment.API_URL}/regions`;

		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({ regions: data });
			})
			.catch(error => alert(JSON.stringify(error)));
	}

	onChangeRegionFilter = () => {
		let x = this.state.regions.filter(d => d.name == this.state.region);
		this.props.changeFilterRegion(x[0].ID);
	};
}

const mapStateToProps = state => {
	return { currentRegion: state.region };
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
)(RegionFilterDropdown);
