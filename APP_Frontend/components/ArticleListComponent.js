import React, { Component } from "react";
import { CardItem, Icon, Text, Right, Badge } from "native-base";

export default class ArticleList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<CardItem button onPress={this.props.onPress}>
				<Icon
					style={{
						color: "lightgreen"
					}}
					active
					name="book"
				/>
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
