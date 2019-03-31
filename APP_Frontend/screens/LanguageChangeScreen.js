import React, { Component } from "react";
import {
	Container,
	Content,
	ListItem,
	Left,
	Text,
	Right,
	Radio,
	Button
} from "native-base";
import localeStore from "../locale/localization";

const radioItem = [
	{ label: "Amharic", value: "amharic" },
	{ label: "Afan Oromo", value: "afan_oromo" },
	{ label: "Tigrigna", value: "tigrigna" },
	{ label: "English", value: "english" }
];

export default class LanguageChangeScreen extends Component {
	static navigationOptions = {
		title: localeStore.Select_language
	};

	constructor() {
		super();
		this.state = {
			radioValue: ""
		};
	}
	render() {
		return (
			<Container>
				<Content>
					{radioItem.map((data, key) => {
						return (
							<ListItem key={key} onPress={() => this._signInAsync(data.value)}>
								<Left>
									<Text>{data.label}</Text>
								</Left>
								<Right>
									<Radio selected={data.value === this.state.radioValue} />
								</Right>
							</ListItem>
						);
					})}
				</Content>
			</Container>
		);
	}

	_signInAsync = async data => {
		this.setState({ radioValue: data });

		await AsyncStorage.setItem("userToken", data);
		localeStore.setLocale(data);
		this.props.navigation.navigate("Home");
	};
}
