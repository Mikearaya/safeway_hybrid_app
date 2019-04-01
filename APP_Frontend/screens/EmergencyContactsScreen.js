import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container, Content } from "native-base";
import localeStore from "../locale/localization";
import ListViewComponent from "../components/ListViewComponent";
var Enviroment = require("../global.js");

export default class EmergencyContactsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emergencyContacts: []
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.EmmergencyContactsIndexScreen.title
    };
  };

  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={this.state.emergencyContacts}
            renderItem={({ item }) => (
              <ListViewComponent
                id={item.ID}
                navigation={this.props.navigation}
                images={item.medias}
                name={item.name}
                address={item.address}
                navigateTo={"EmergencyContactDetail"}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />{" "}
        </Content>{" "}
      </Container>
    );
  }

  componentDidMount() {
    let url = `${Enviroment.API_URL}/emergency_contacts`;

    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({
          emergencyContacts: data
        });
      })
      .catch(error => alert(JSON.stringify(error.message)));
  }
}
