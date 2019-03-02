import React, { Component } from 'react'
import { Text, Image, StyleSheet, View, Dimensions } from 'react-native'
import { Container, Content } from 'native-base'

const imageLocation = './../assets/images/image-not-found.jpg'

const paragraph = `To support React's concept of unidirectional data flow (which might be contrasted with AngularJS's bidirectional flow), the Flux architecture represents an alternative to the popular model-view-controller architecture. 
Flux features actions which are sent through a central dispatcher to a store, and changes to the store are propagated back to the view[22]. When used with React, this propagation is 
accomplished through component properties. Flux can be considered a variant of the observer pattern. React component under the Flux architecture should not directly modify any props passed to it, but should be passed c`

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10
  },
  paragraphContainer: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default class PolicyViewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Imigration Policy')
    }
  }

  render() {
    return (
      <Container style={styles.mainContainer}>
        <Content>
          <Image
            source={require(imageLocation)}
            style={{
              height: 200,
              width: 350
            }}
          />
          <View style={styles.paragraphContainer}>
            <Text> {paragraph} </Text>
            <Text> {paragraph} </Text>
            <Text> {paragraph} </Text>
            <Text> {paragraph} </Text>
          </View>
        </Content>
      </Container>
    )
  }
}
