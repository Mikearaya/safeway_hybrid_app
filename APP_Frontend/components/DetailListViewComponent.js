/*
 * @CreateTime: Apr 7, 2019 10:01 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 1:52 PM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
	List,
	Header,
	Text,
	ListItem,
	Left,
	Button,
	Icon,
	Body,
	Content,
	Container,
	Card,
	CardItem,
	View
} from "native-base";
import localeStore from "../locale/localization";

styles = StyleSheet.create({
	listHeader: {
		backgroundColor: "#f7f7f7",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	},
	list: {
		flex: 1,
		backgroundColor: "black",
		height: "auto"
	},
	catagoryFont: {
		color: "lightgrey"
	},
	iconBackground: {
		backgroundColor: "lightgreen"
	},
	listPosision: {
		paddingTop: 20,
		paddingBottom: 20,
		marginTop: 10
	},
	mainText: {
		color: "#105c78",
		marginRight: 10,
		marginTop: 3
	},
	mainHeader: {
		color: "#105c78",
		fontSize: 20,
		fontWeight: "bold",
		marginRight: 10,
		marginTop: 3
	}
});
export default class DetailListViewComponent extends Component {
	render() {
		return (
			<Container>
				<Content>
					<CardItem
						style={{
							backgroundColor: "#f7f7f7",
							margin: 10,
							borderRadius: 20,
							padding: 0
						}}>
						<Body>
							<View
								style={{
									flex: 1,
									padding: 10,
									flexDirection: "row",
									width: "100%",
									marginBottom: 5,
									borderWidth: 2,

									borderTopWidth: 0,
									borderRightWidth: 0,
									borderLeftWidth: 0,

									borderBottomColor: "#cecece"
								}}>
								<Text style={styles.mainHeader}>{this.props.item.name}</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Icon style={styles.mainText} name="call" />
								<Text>{this.props.item.phone_number}</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Icon style={styles.mainText} name="mail" />
								<Text>{this.props.item.phone_number}</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<View>
									<Icon style={styles.mainText} name="compass" />
								</View>
								<Text>{this.props.item.address}</Text>
							</View>
						</Body>
					</CardItem>
				</Content>
			</Container>
		);
	}
}
