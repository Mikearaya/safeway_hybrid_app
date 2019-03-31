import React, { Component } from "react";
import { Video } from "expo";
import { Dimensions } from "react-native";

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
				style={{ width: width, height: 300 }}
			/>
		);
	}
}
