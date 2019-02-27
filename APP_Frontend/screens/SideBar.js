import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image} from 'react-native';
import localeStore from '../locale/localization';
import { Card, CardItem, Icon, Right, Button } from 'native-base';


const informationCatagories = [
    {
      catagory: 'Immigration Policies',
      component: 'Policies',
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
      key: 3,
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
    },

      ];
class SideBar extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
        <View >
        <View style={{height: 150, backgroundColor: 'white', alignItems: 'center',
  justifyContent: 'center'}}>
  <Image source={require('./../assets/images/notfound.png')}
  style={{height: 120, width: 120}}/>
  </View>
            <ScrollView>
            <View>
                <Card style={{paddingTop:2}} > 
          <CardItem button  onPress={this.navigateToScreen("News")}>
              <Icon active name="logo-googleplus" />
              <Text>{localeStore.SideBar.News}</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem button  onPress={this.navigateToScreen('Forum')}>
              <Icon active name="logo-googleplus" />
              <Text>{localeStore.SideBar.Forum}</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem button  onPress={this.navigateToScreen('Help')}>
              <Icon active name="logo-googleplus" />
              <Text>{localeStore.SideBar.Help}</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            
          </Card>
            </View>
            </ScrollView>
        </View>
        );
    }
}

SideBar.propTypes = {
  navigation: PropTypes.object
};

export default SideBar;