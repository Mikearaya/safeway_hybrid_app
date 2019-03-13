import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left,
  Button
} from 'native-base'
import localeStore from '../locale/localization'

const radioItem = [
  { label: 'Amharic', value: 'amharic' },
  { label: 'Afan Oromo', value: 'afan_oromo' },
  { label: 'Tigrigna', value: 'tigrigna' },
  { label: 'English', value: 'english' }
]
export default class EntryScreen extends Component {
  constructor() {
    super()
    this.state = {
      radioValue: ''
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.Select_language
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <ListItem onPress={() => this._signInAsync('amharic')}>
            <Left>
              <Text>{localeStore.LanguageScreen.amharic}</Text>
            </Left>
            <Right>
              <Radio selected={this._isSelected('amharic') == true} />
            </Right>
          </ListItem>
          <ListItem onPress={() => this._signInAsync('english')}>
            <Left>
              <Text>{localeStore.LanguageScreen.english}</Text>
            </Left>
            <Right>
              <Radio selected={this._isSelected('english') == true} />
            </Right>
          </ListItem>
          <ListItem onPress={() => this._signInAsync('afan_oromo')}>
            <Left>
              <Text>{localeStore.LanguageScreen.afan_oromo}</Text>
            </Left>
            <Right>
              <Radio selected={this._isSelected('afan_oromo') == true} />
            </Right>
          </ListItem>
          <ListItem onPress={() => this._signInAsync('tigrigna')}>
            <Left>
              <Text>{localeStore.LanguageScreen.tigrigna}</Text>
            </Left>
            <Right>
              <Radio selected={this._isSelected('tigrigna') == true} />
            </Right>
          </ListItem>
          <ListItem onPress={() => this._signInAsync('arabic')}>
            <Left>
              <Text>{localeStore.LanguageScreen.arabic}</Text>
            </Left>
            <Right>
              <Radio selected={this._isSelected('arabic') == true} />
            </Right>
          </ListItem>
        </Content>
      </Container>
    )
  }

  _isSelected = async data => {
    const token = await AsyncStorage.getItem('userToken')
    
    return this.state.radioValue.toUpperCase() === data.toUpperCase() ||
      token.toUpperCase() === data.toUpperCase()
      ? true
      : false
  }
  _signInAsync = async data => {
    this.setState({ radioValue: data })

    await AsyncStorage.setItem('userToken', data)
    this.props.navigation.navigate('Home')

    localeStore.setLocale(data)
  }
}
