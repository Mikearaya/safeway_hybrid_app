/*
 * @CreateTime: Apr 7, 2019 10:03 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 10:03 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import { Button, Icon } from "native-base";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	icon: { fontSize: 40, color: "white" }
});

export default class NavigationButton extends Component {
	render() {
		return (
			<Button onPress={() => this.props.sideBar.toggleDrawer()} transparent>
				<Icon style={styles.icon} name="menu" />
			</Button>
		);
	}
}
