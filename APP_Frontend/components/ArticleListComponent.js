/*
 * @CreateTime: Apr 7, 2019 9:57 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 9:57 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import { CardItem, Icon, Text, Right, Badge } from "native-base";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	iconBox: {
		color: "lightgreen"
	}
});

export default class ArticleList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<CardItem button onPress={this.props.onPress}>
				<Icon style={styles.iconBox} active name="book" />
				<Text> {this.props.catagory.name} </Text>
				<Right>
					<Badge>
						<Text> {this.props.catagory.totalArticles} </Text>
					</Badge>
				</Right>
			</CardItem>
		);
	}
}
