var Enviroment = require('../global.js');
import React, { Component } from 'react'
import { Text, Button, View, Image, StyleSheet, Dimensions } from 'react-native'
import { Container, Content } from 'native-base'

const imageLocation = './../assets/images/image-not-found.jpg'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  paragraphContainer: {
    padding: 23
  }
})

const { width } = Dimensions.get('window')

export default class NewsDetail extends Component {
  
constructor(props) {
  super(props)
  this.state = {
    newsDetail: {},
    header: '',
    content: ''
  }
}
  static navigationOptions = ({ navigation }) => {

  }    

  
  

  render() {
    return (
      <Container style={styles.mainContainer}>
        <Content >
        <Image
          source={require(imageLocation)}
          style={{ height: 200, width: width }}
        />
        <View style={styles.paragraphContainer}>        
          <Text> {this.state.content} </Text>

          </View>
        </Content>
      </Container>
    )
  }

    componentDidMount() {
      const {state} = this.props.navigation;
    let url =
      `${Enviroment.API_URL}/news/${state.params.id}`

    fetch(url)
      .then(result => result.json())
       .then(data => {
        this.setState({
          content: data.article.content
        })
      })
      .catch(error => alert(JSON.stringify(error.message)))
  }




}
