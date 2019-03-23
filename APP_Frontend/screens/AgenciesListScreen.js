import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Container, Content } from 'native-base'
import localeStore from '../locale/localization'
import ListViewComponent from '../components/ListViewComponent'
var Enviroment = require('../global.js')

export default class AgenciesListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      agencies: []
    }
  }
  static navigationOptions = () => {
    return {
      title: localeStore.AgenciesList.title
    }
  }


  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={this.state.agencies}
            renderItem={({ item }) => (
              <ListViewComponent
              id={item.ID}
                navigation={this.props.navigation}
                images={require('./../assets/images/saudi_embassy_log.jpg')}
                name={item.name}
                address={item.address}
                navigateTo={'AgencyDetail'}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
      </Container>
    )
  }

    componentDidMount() {
    let url =
      `${Enviroment.API_URL}/agencies`

    fetch(url)
      .then(result => result.json())
       .then(data => {
        this.setState({ agencies: data })
      })
      .catch(error => alert(JSON.stringify(error.message)))
  }


}
