import React, { Component } from 'react'
import { Container, Content, Textarea, Form } from 'native-base'

export default class ChatFormScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Add Post')
    }
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Textarea
              onChangeText={title => this.setState({ title })}
              rowSpan={3}
              bordered
              placeholder="Enter your comment"
            />
          </Form>
        </Content>
      </Container>
    )
  }
}
