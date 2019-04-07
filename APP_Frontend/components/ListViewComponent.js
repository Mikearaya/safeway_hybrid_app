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

const styles = StyleSheet.create({
	listBox: {
		backgroundColor: "#f2f2f2",
		margin: 3,
		marginLeft: 0,
		paddingLeft: 3,
		borderLeftWidth: 8,
		borderColor: "#127ba4"
	},
	subTitle: {
		borderWidth: 0,
		textDecorationLine: "none"
	}
});

export default class ListViewComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
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
						source={{
							uri: this.props.images
						}}
					/>
				</Left>
				<Body>
					<Text>{this.props.name}</Text>
					<Text note style={styles.subTitle}>
						{this.props.address}
					</Text>
				</Body>
				<Right>
					<Icon name="arrow-forward" />
				</Right>
			</ListItem>
		);
	}
}
