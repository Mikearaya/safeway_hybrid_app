/*
 * @CreateTime: Apr 7, 2019 10:02 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 11:47 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import {
	ListItem,
	Left,
	Thumbnail,
	Body,
	Text,
	Right,
	Icon
} from "native-base";

import { StyleSheet } from "react-native";
var Enviroment = require("../global.js");

const styles = StyleSheet.create({
	listBox: {
		backgroundColor: "#f2f2f2",
		margin: 3,
		marginLeft: 0,
		paddingLeft: 3,
		borderLeftWidth: 8,
		borderColor: "#127ba4",
		paddingBottom: 10
	},
	subTitle: {
		borderWidth: 0,
		textDecorationLine: "none"
	},
	body: {
		borderBottomWidth: 0
	},
	right: {
		borderBottomWidth: 0
	}
});

export default class ListViewComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const image = this.props.images
			? `${Enviroment.RESOURCE_URL}/${this.props.images}`
			: "../assets/images/hospital_icon.png";
		return (
			<ListItem
				style={styles.listBox}
				onPress={() =>
					this.props.navigation.navigate(this.props.navigateTo, {
						id: this.props.id
					})
				}
				avatar>
				<Left>
					<Thumbnail
						source={
							this.props.images
								? { uri: image }
								: require("../assets/images/thumbnail_placeholder.png")
						}
					/>
				</Left>
				<Body style={{ borderBottomWidth: 0 }}>
					<Text>{this.props.name}</Text>
					<Text note style={styles.subTitle}>
						{this.props.address}
					</Text>
				</Body>
				<Right style={styles.right}>
					<Icon name="arrow-forward" />
				</Right>
			</ListItem>
		);
	}
}
