import React, { Component } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
const Enviroment = require("../global.js");
import localeStore from "../locale/localization";
import {
	Text,
	Container,
	Textarea,
	Button,
	Input,
	Item,
	Form,
	Content,
	Label
} from "native-base";
import Toast from "react-native-root-toast";
import { Dropdown } from "react-native-material-dropdown";
import NavigationButton from "../components/NavigationButton";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		left: 0,
		top: 0,
		width: "100%"
	},
	content: { paddingLeft: 5, paddingRight: 5 },
	form: { paddingLeft: 5, paddingRight: 5 },
	searchSection: {
		backgroundColor: "#46b5be"
	},
	searchIcon: {
		padding: 10,
		color: "white"
	},
	input: {
		flex: 1,
		borderWidth: 3,
		borderColor: "black",
		paddingLeft: 0,
		color: "white"
	},
	searchBox: {
		backgroundColor: "#3fa4ac",
		margin: 5,
		flex: 1,
		flexDirection: "row",
		borderRadius: 20
	},
	textArea: {
		marginTop: 5,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0
	},
	submitButton: {
		marginTop: 5
	}
});

let toast = Toast.show("", {
	duration: Toast.durations.LONG,
	position: Toast.positions.CENTER,
	shadow: true,
	animation: true,
	hideOnPress: true,
	shadowColor: "green",
	delay: 0,
	onShow: () => {},
	onShown: () => {},
	onHide: () => {},
	onHidden: () => {}
});

export default class ComplainFormScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: (
				<NavigationButton
					sideBar={navigation}
					style={styles.navigationButton}
				/>
			),
			title: localeStore.ComplainForm.title
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			complain: "",
			passport: "",
			barcode: "",
			selectedComplainType: "",
			submited: false,
			complain_types: [],
			isLoading: true
		};
	}

	render() {
		return (
			<Container style={styles.container}>
				<Content style={styles.content}>
					<Form style={styles.form}>
						<Dropdown
							label="Select reason"
							data={this.state.complain_types}
							value={this.state.selectedComplainType}
							valueExtractor={c => c.type}
							onChangeText={(value, index, data) => {
								this.setState({ selectedComplainType: data[index].ID });
							}}
						/>
						<Item stackedLabel>
							<Label>Passport Number</Label>
							<Input
								value={this.state.passport}
								onChangeText={passport => this.setState({ passport })}
							/>
						</Item>
						<Item stackedLabel>
							<Label>Barcode Number</Label>
							<Input
								value={this.state.barcode}
								onChangeText={barcode => this.setState({ barcode })}
							/>
						</Item>

						<Textarea
							style={styles.textArea}
							value={this.state.complain}
							onChangeText={complain => this.setState({ complain })}
							rowSpan={5}
							bordered
							placeholder="Type your complain"
						/>

						<Button
							style={styles.submitButton}
							onPress={() => this.formSubmited()}
							disabled={this.state.submited}
							block
							primary>
							<Text>Submit</Text>
						</Button>
					</Form>
					<ActivityIndicator
						animating={this.state.isLoading}
						size="large"
						color="#0000ff"
					/>
				</Content>
			</Container>
		);
	}

	componentDidMount() {
		let url = `${Enviroment.API_URL}/complain_types`;
		this.setState({ isLoading: true });
		fetch(url)
			.then(result => result.json())
			.then(data => {
				this.setState({ complain_types: data, isLoading: false });
			})
			.catch(error => alert(JSON.stringify(error.message)));
	}

	formSubmited() {
		const url = `${Enviroment.API_URL}/complains`;
		this.setState({ isLoading: true });
		if (!this.state.submited) {
			this.setState({ isLoading: true });
			fetch(url, {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				method: "POST",
				body: JSON.stringify({
					complains: {
						barcode: this.state.barcode,
						passport_id: this.state.passport,
						complain: this.state.complain,
						COMPLAIN_TYPE: this.state.selectedComplainType
					}
				})
			})
				.then(response => response.json())
				.then(responseJson => {
					this.setState({ isLoading: false });
					Toast.show("Complain added successfully", toast);
					this.setState({
						passport: "",
						selectedComplainType: "",
						complain: "",
						barcode: "",
						COMPLAIN_TYPE: "",
						isLoading: false
					});
				})
				.catch(function(error) {
					alert(JSON.stringify(error));
				});
		}
	}
}
