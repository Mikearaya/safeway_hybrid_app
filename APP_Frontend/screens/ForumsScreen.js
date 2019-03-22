import React, { Component } from 'react'
import { FlatList, StyleSheet, Image } from 'react-native'

import { Container } from 'native-base'
import localeStore from '../locale/localization'
import NavigationButton from '../components/NavigationButton'
import ForumCard from '../components/ForumCard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  boldFont: {
    fontWeight: 'bold'
  },
  commentContainer: {
    color: '#87838B',
    paddingBottom: 0,
    paddingTop: 0
  }
})

export default class ForumsScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      forums: []
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.ForumScreen.title,
      headerLeft: <NavigationButton sideBar={navigation} />
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <FlatList
          data={this.state.forums}
          renderItem={({ item }) => (
            <ForumCard forumData={item} navigation={this.props.navigation} />
          )}
        />
      </Container>
    )
  }

     componentDidMount() {
       let url =
         'http://192.168.1.4/ilo_app/backend/index.php/forums'

       fetch(url)
         .then(result => result.json())
         .then(data => {
           this.setState({
             forums: data
           })
         })
         .catch(error => alert(JSON.stringify(error.message)))
     }

  
    }

