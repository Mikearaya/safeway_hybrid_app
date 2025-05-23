import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import localeStore from "../locale/localization";
import { CardItem, Icon, Right, Content, Container } from "native-base";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	menuIcons: {
		marginRight: 10,
		fontSize: 24,
		color: "#46b5be"
	},
	menuIconsDanger: {
		marginRight: 10,
		fontSize: 24,
		color: "red"
	},
	menuText: {
		color: "black"
	},
	menuItem: {
		borderBottomColor: "#46b5be",
		borderBottomWidth: 1
	},
	image: {
		height: height / 3,
		width: width - width / 3,
		padding: 5
	},
	imageBox: {
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: "#127ba4"
	},
	container: {
		backgroundColor: "white"
	},
	sidebarContent: {
		paddingTop: 2,
		backgroundColor: "#127ba4"
	}
});
class SideBar extends Component {
	navigateToScreen = route => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	};

	render() {
		return (
			<Container style={styles.container}>
				<View style={styles.imageBox}>
					<Image
						source={require("./../assets/images/sidebar.png")}
						style={styles.image}
					/>
				</View>
				<ScrollView style={{ height: 100 }}>
					<View>
						<Content style={styles.sidebarContent}>
							<CardItem
								style={styles.menuItem}
								button
								onPress={this.navigateToScreen("Home")}>
								<FontAwesome style={styles.menuIcons}>
									{Icons.newspaper}
								</FontAwesome>
								<Text style={styles.menuText}>{localeStore.SideBar.News}</Text>
							</CardItem>
							<CardItem
								style={styles.menuItem}
								button
								onPress={this.navigateToScreen("Forum")}>
								<FontAwesome style={styles.menuIcons}>
									{Icons.commentDots}
								</FontAwesome>
								<Text style={styles.menuText}>{localeStore.SideBar.Forum}</Text>
							</CardItem>
							<CardItem
								style={styles.menuItem}
								button
								onPress={this.navigateToScreen("Articles")}>
								<FontAwesome style={styles.menuIcons}>
									{Icons.infoCircle}
								</FontAwesome>
								<Text style={styles.menuText}>{localeStore.SideBar.Help}</Text>
							</CardItem>
							<CardItem
								style={styles.menuItem}
								button
								onPress={this.navigateToScreen("AgenciesList")}>
								<FontAwesome style={styles.menuIcons}>{Icons.link}</FontAwesome>
								<Text style={styles.menuText}>
									{localeStore.SideBar.Agencies}
								</Text>
							</CardItem>
							<CardItem
								style={styles.menuItem}
								button
								onPress={this.navigateToScreen("HospitalsList")}>
								<FontAwesome style={styles.menuIcons}>
									{Icons.stethoscope}
								</FontAwesome>
								<Text style={styles.menuText}>
									{localeStore.SideBar.Hospitals}
								</Text>
							</CardItem>
							<CardItem
								style={styles.menuItem}
								button
								onPress={this.navigateToScreen("SchoolsList")}>
								<FontAwesome style={styles.menuIcons}>
									{Icons.graduationCap}
								</FontAwesome>
								<Text style={styles.menuText}>
									{localeStore.SideBar.Schools}
								</Text>
							</CardItem>
							<CardItem
								style={styles.menuItem}
								button
								onPress={this.navigateToScreen("EmergencyContacts")}>
								<Icon name="contacts" style={styles.menuIcons} />
								<Text style={styles.menuText}>
									{localeStore.SideBar.EmergencyContacts}
								</Text>
							</CardItem>
							<CardItem
								style={styles.menuItem}
								button
								onPress={this.navigateToScreen("complain")}>
								<FontAwesome style={styles.menuIcons}>
									{Icons.bullhorn}
								</FontAwesome>
								<Text style={styles.menuText}>Complain Managment</Text>
							</CardItem>
							<CardItem
								style={styles.menuItem}
								button
								onPress={this.navigateToScreen("Auth")}>
								<FontAwesome style={styles.menuIcons}>
									{Icons.language}
								</FontAwesome>
								<Text style={styles.menuText}>
									{localeStore.SideBar.Language}
								</Text>
							</CardItem>
						</Content>
					</View>
				</ScrollView>
			</Container>
		);
	}
}

SideBar.propTypes = {
	navigation: PropTypes.object
};

export default SideBar;
