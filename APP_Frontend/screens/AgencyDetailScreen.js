import React, { Component } from "react";
import { Container } from "native-base";
import localeStore from "../locale/localization";
import DetailListViewComponent from "../components/DetailListViewComponent";
var Enviroment = require("../global.js");

const detailInformation = {
  name: "Ethiopian Embassy",
  address: "Riyad, Saudi arabia",
  phoneNumber: "0912669988",
  email: "mikaelaraya12@gmail.com"
};

export default class AgencyDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agencyDetail: {}
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.AgencyDetail.title
    };
  };
  render() {
    return (
      <Container>
        <DetailListViewComponent item={this.state.agencyDetail} />
      </Container>
    );
  }

  componentDidMount() {
    const { state } = this.props.navigation;
    let url = `${Enviroment.API_URL}/agencies/${state.params.id}`;

    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({
          agencyDetail: data.agency
        });
      })
      .catch(error => alert(JSON.stringify(error.message)));
  }
}
