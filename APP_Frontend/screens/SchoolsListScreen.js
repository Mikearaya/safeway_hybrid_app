import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Container, Content } from 'native-base'
import localeStore from '../locale/localization'
import ListViewComponent from '../components/ListViewComponent'
var Enviroment = require('../global.js')

export default class SchoolsListScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schools: []
    }
  }
  static navigationOptions = () => {
    return {
      title: localeStore.SchoolsList.title
    }
  }



  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={this.state.schools}
            renderItem={({ item }) => (
              <ListViewComponent
              id={item.ID}
                navigation={this.props.navigation}
                images={item.medias}
                name={item.name}
                address={item.address}
                navigateTo={'SchoolDetail'}
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
      `${Enviroment.API_URL}/schools`

    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({
          schools: data
        })
      })
      .catch(error => alert(JSON.stringify(error.message)))
  }
}
