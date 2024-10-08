/*
 * @CreateTime: Apr 7, 2019 10:03 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 10:03 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import { Card, CardItem, Left, Body, Text } from "native-base";
import { StyleSheet, Image } from "react-native";

var Enviroment = require("./../global");

const style = StyleSheet.create({
	container: {
		flex: 1
	},
	newsImage: {
		height: 200,
		width: 320
	}
});

export default class NewsCard extends Component {
	render() {
		return (
			<Card style={style.container}>
				<CardItem bordered>
					<Left>
						<Body>
							<Text>{this.props.newsItems.header}</Text>
							<Text note>{this.props.newsItems.date_added}</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem
					button
					onPress={() =>
						this.props.navigation.navigate("NewsDetail", {
							id: this.props.newsItems.ID
						})
					}>
					<Body>
						<Image
							resizeMode="stretch"
							source={{
								uri: this.props.newsItems.medias
									? `${Enviroment.RESOURCE_URL}/${this.props.newsItems.medias}`
									: "./../assets/images/notfound.png"
							}}
							style={style.newsImage}
						/>
						<Text>{this.props.newsItems.data}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}
