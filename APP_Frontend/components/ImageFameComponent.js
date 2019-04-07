/*
 * @CreateTime: Apr 7, 2019 10:02 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 10:02 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import { Image } from "native-base";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: width
	}
});
export default class ImageFame extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const img = this.props.imageLocation
			? "./../assets/images/image-not-found.jpg"
			: "./../assets/images/image-not-found.jpg";
		if (this.props.imageLocation === null || this.props.imageLocation === "") {
			return;
		} else {
			return <Image source={require({ img })} style={styles.image} />;
		}
	}
}
