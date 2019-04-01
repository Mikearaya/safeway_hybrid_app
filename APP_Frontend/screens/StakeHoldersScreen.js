import React, { Component } from "react";
import { Text } from "react-native";
import { Container, Content, Accordion } from "native-base";
import localeStore from "../locale/localization";

const dataArray = [
  {
    title: "Ledgal Migration",
    content: `Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
  dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum 
  dolor sit amet, Lorem ipsum dolor sit amet`
  },
  {
    title: "Illegal Migration",
    content: `Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
  dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum 
  dolor sit amet, Lorem ipsum dolor sit amet`
  }
];
export default class StakeHoldersScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.ResponsiblePartiesScreen.title
    };
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0} />
        </Content>
      </Container>
    );
  }
}
