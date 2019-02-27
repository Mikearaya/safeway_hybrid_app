import React, { Component } from 'react';
import { AsyncStorage} from 'react-native';
import { Container, Header, Content, ListItem, Text, Radio, Right, Left, Button } from 'native-base';


const radioItem = [
    { label: 'Amharic', value: 'amharic' },
    { label: 'Afan Oromo', value: 'afan_oromo' },
    { label: 'Tigrigna', value: 'tigrigna' },
    { label: 'English', value: 'english' }

];
export default class EntryScreen extends Component {
  constructor() {
  super();
  this.state = {
   radioValue: '',
 }
}
  static navigationOptions = {
    title: 'Select Language',
  };

  render() {
    return (
      <Container>
        <Content >
    {
      radioItem.map((data, key) => {
          return (
                    <ListItem key={key}   onPress={()=> this.setState({radioValue:data.value})}>

                      <Left>
                          <Text>{data.label}</Text>
                      </Left>
                      <Right>
                          <Radio
                          
                      
                              selected={data.value === this.state.radioValue}
                            />
                      </Right>
                    </ListItem>
                  )
        })
    }

        <Button 
        disabled={!this.state.radioValue}
        onPress={() => this._signInAsync()} full success>
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', this.state.radioValue);
    this.props.navigation.navigate('Home');
  };
}
