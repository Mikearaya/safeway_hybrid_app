import React, { Component } from "react";
import { Container } from "native-base";
import localeStore from "../locale/localization";
import DetailListViewComponent from "../components/DetailListViewComponent";
var Enviroment = require("../global.js");

export default class SchoolDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolDetail: {}
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.SchoolDetail.title
    };
  };
  render() {
    return (
      <Container>
        <DetailListViewComponent item={this.state.schoolDetail} />
      </Container>
    );
  }

  componentDidMount() {
    const { state } = this.props.navigation;
    let url = `${Enviroment.API_URL}/schools/${state.params.id}`;

    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({
          schoolDetail: data.school
        });
      })
      .catch(error => alert(JSON.stringify(error.message)));
  }
}
