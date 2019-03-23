import React, { Component } from 'react'
import {
  Container,
} from 'native-base'
import localeStore from '../locale/localization';
import DetailListViewComponent from '../components/DetailListViewComponent';
var Enviroment = require('../global.js')

export default class EmergencyContactDetailScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      emergencyContacts: {}
    }

  }
    static navigationOptions = ({navigation}) => {
    
        return {
            title: localeStore.EmergencyContactDetailScreen.title
        }
    }
  render() {
    return (
      <Container>
        <DetailListViewComponent item={this.state.emergencyContacts}/>
      </Container>
    )
  }

    componentDidMount() {
      const {state} = this.props.navigation;
      let url =
        `${Enviroment.API_URL}/emergency_contacts/${state.params.id}`

      fetch(url)
        .then(result => result.json())
        .then(data => {
          this.setState({
            emergencyContacts: data.emergency_contact
          })
        })
        .catch(error => alert(JSON.stringify(error.message)))
    }
}
