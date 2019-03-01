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
      title: navigation.getParam('title', 'Help'),
      headerLeft: <NavigationButton sideBar={navigation} />
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Card
            style={{ paddingTop: 2 }}
            dataArray={informationCatagories}
            renderRow={({ component, catagory }) => (
              <CardItem
                button
                onPress={() => this.props.navigation.navigate(component)}
              >
                <Icon active name="logo-googleplus" />
                <Text>{catagory}</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            )}
          />
        </Content>
      </Container>
    )
  }
}
