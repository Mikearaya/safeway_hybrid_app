import React, { Component } from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";

export default class AuthLoadingScreen extends Component {
	constructor(props) {
		super(props);
		this._bootstrapAsync();
	}

	_bootstrapAsync = async () => {
		let userToken = await AsyncStorage.getItem("userToken");
		this.props.navigation.navigate(userToken ? "News" : "Auth");
	};

	render() {
		return (
			<View>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}
