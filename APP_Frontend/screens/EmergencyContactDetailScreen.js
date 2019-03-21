import React, { Component } from 'react'
import {
  Container,
} from 'native-base'
import localeStore from '../locale/localization';
import DetailListViewComponent from '../components/DetailListViewComponent';


const detailInformation = {
  name: 'Ethiopian Embassy',
  address: 'Riyad, Saudi arabia',
  phoneNumber: '0912669988',
  email: 'mikaelaraya12@gmail.com'
};

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
        `http://192.168.1.3/ilo_app/backend/index.php/emergency_contacts/${state.params.id}`

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
