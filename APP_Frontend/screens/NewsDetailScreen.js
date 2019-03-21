import React, { Component } from 'react'
import { Text, Button, View, Image, StyleSheet, Dimensions } from 'react-native'
import localeStore from '../locale/localization'
import { Container, Content } from 'native-base'

const paragraph = `To support React's concept of unidirectional data flow (which might be contrasted with AngularJS's bidirectional flow), the Flux architecture represents an alternative to the popular model-view-controller architecture. 
Flux features actions which are sent through a central dispatcher to a store, and changes to the store are propagated back to the view[22]. When used with React, this propagation is 
accomplished through component properties. Flux can be considered a variant of the observer pattern. React component under the Flux architecture should not directly modify any props passed to it, but should be passed c`
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
      `http://192.168.1.3/ilo_app/backend/index.php/news/${state.params.id}`

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
