import React from 'react'
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right
} from 'native-base'
import NavigationButton from '../components/NavigationButton'
import localeStore from '../locale/localization'

const informationCatagories = [
  {
    catagory: 'Immigration Policies',
    component: 'PolicyIndex',
    key: 1
  },
  {
    catagory: 'Migration Types',
    component: 'MigrationTypes',
    key: 2
  },
  {
    catagory: 'Responsible Parties',
    component: 'StakeHolders',
    key: 3
  },
  {
    catagory: 'Emergency Contacts',
    component: 'EmergencyContacts',
    key: 4
  },
  {
    catagory: 'General Information',
    component: 'GeneralInfo',
    key: 5
  }
]

export default class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: localeStore.HelpScreen.title,
      headerLeft: <NavigationButton sideBar={navigation} />
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Card style={{ paddingTop: 2 }}>
            <CardItem
              button
              onPress={() => this.props.navigation.navigate('PolicyIndex')}
            >
              <Icon
                style={{ color: 'lightgreen' }}
                active
                name="logo-googleplus"
              />
              <Text>{localeStore.HelpScreen.immigration_policy} </Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem
              button
              onPress={() => this.props.navigation.navigate('MigrationTypes')}
            >
              <Icon
                style={{ color: 'lightgreen' }}
                active
                name="logo-googleplus"
              />
              <Text>{localeStore.HelpScreen.immigration_type} </Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem
              button
              onPress={() => this.props.navigation.navigate('StakeHolders')}
            >
              <Icon
                style={{ color: 'lightgreen' }}
                active
                name="logo-googleplus"
              />
              <Text>{localeStore.HelpScreen.responsible_parties} </Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
  
            <CardItem
              button
              onPress={() => this.props.navigation.navigate('GeneralInfo')}
            >
              <Icon
                style={{ color: 'lightgreen' }}
                active
                name="logo-googleplus"
              />
              <Text>{localeStore.HelpScreen.general_informations} </Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
