import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Container, Content } from 'native-base'
import localeStore from '../locale/localization'
import ListViewComponent from '../components/ListViewComponent'
var Enviroment = require('../global.js')

export default class HospitalsListScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hospitals: []
    }
  }
  static navigationOptions = () => {
    return {
      title: localeStore.HospitalsList.title
    }
  }


  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={this.state.hospitals}
            renderItem={({ item }) => (
              <ListViewComponent
                id={item.ID}
                navigation={this.props.navigation}
                images={require('./../assets/images/saudi_embassy_log.jpg')}
                name={item.name}
                address={item.address}
                navigateTo={'HospitalDetail'}
              />
            )}
          />
        </Content>
      </Container>
    )
  }


componentDidMount() {
  let url =
    `${Enviroment.API_URL}/hospitals`

  fetch(url)
    .then(result => result.json())
    .then(data => {
      this.setState({
        hospitals: data
      })
    })
    .catch(error => alert(JSON.stringify(error.message)))
}
}
