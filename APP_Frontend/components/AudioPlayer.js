/*
 * @CreateTime: Apr 7, 2019 9:59 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Apr 7, 2019 9:59 AM
 * @Description: Modify Here, Please
 */
import React, { Component } from "react";
import {
	Text,
	Container,
	List,
	ListItem,
	Body,
	Button,
	Icon
} from "native-base";
import { Audio } from "expo";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: { flex: 1, display: "flex", height: 100 },
	body: {
		flex: 1,
		alignContent: "space-around",
		flexDirection: "row"
	}
});
export default class AudioPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false
		};

		this.soundObject = new Audio.Sound();
	}
	render() {
		this._addMusic();
		return (
			<Container style={styles.container}>
				<List>
					<ListItem>
						<Body style={styles.body}>
							<Button rounded onPress={() => this._togglePlay()}>
								<Text>Play</Text>
								<Icon name={this.state.isPlaying ? "pause" : "play"} />
							</Button>
							<Button rounded onPress={() => this._stopMusic()}>
								<Text>
									Stop {this.soundObject.getStatusAsync().durationMillis}
								</Text>
								<Icon name="square" />
							</Button>
						</Body>
					</ListItem>
				</List>
			</Container>
		);
	}

	_addMusic = async () => {
		await this.soundObject.unloadAsync();
		await this.soundObject.loadAsync(
			require("./../assets/audios/no_stylist.mp3")
		);
	};

	_togglePlay = async () => {
		const x = await this.soundObject.getStatusAsync();
		if (x.isPlaying && x.isLoaded) {
			await this.soundObject.pauseAsync();
		} else if (!x.isPlaying && x.isLoaded) {
			await this.soundObject.playAsync();
		}
	};

	_stopMusic = async () => {
		const x = await this.soundObject.getStatusAsync();
		if (x.isPlaying) {
			await this.soundObject.stopAsync();
			this.setState({ isPlaying: false });
		}
	};
}
