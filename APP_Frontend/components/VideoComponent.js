/*
 * @CreateTime: Apr 7, 2019 10:05 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 10:05 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import { Video } from "expo";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	videoController: { width: width, height: 300 }
});
const { width } = Dimensions.get("window");

export default class VideoPlayer extends Component {
	render() {
		return (
			<Video
				source={require("./../assets/videos/middle_child.mp4")}
				rate={1.0}
				useNativeControls={true}
				volume={1.0}
				isMuted={false}
				resizeMode="cover"
				style={styles.videoController}
			/>
		);
	}
}
