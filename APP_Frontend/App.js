import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import localeStore from "./locale/localization";
import { AsyncStorage } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/app-redux";

export default class App extends React.Component {
	constructor() {
		super();

		this._checkLocale();
		this.state = {
			isReady: false,
			isLoadingComplete: false
		};
	}
	componentWillMount() {
		this.loadFonts();
	}

	async loadFonts() {
		await Expo.Font.loadAsync({
			Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
			fa_solid_900: require("./node_modules/native-base/Fonts/FontAwesome5_Solid.ttf")
		});
		this.setState({
			isReady: true
		});
	}

	_checkLocale = async () => {
		await AsyncStorage.getItem("userToken").then(locale => {
			localeStore.setLocale(locale ? locale : "english");
		});
	};

	render() {
		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			);
		} else {
			return (
				<Provider store={store}>
					<View style={styles.container}>
						{Platform.OS === "ios" && <StatusBar barStyle="default" />}
						<AppNavigator />
					</View>
				</Provider>
			);
		}
	}

	_loadResourcesAsync = async () => {
		return Promise.all([
			Asset.loadAsync([
				require("./assets/images/icon.png"),
				require("./assets/images/icon.png")
			]),
			Font.loadAsync({
				...Icon.Ionicons.font,
				"space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
			})
		]);
	};

	_handleLoadingError = error => {
		console.warn(error);
	};

	_handleFinishLoading = () => {
		this.setState({
			isLoadingComplete: true
		});
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f2f2f2"
	}
});
