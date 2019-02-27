import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image} from 'react-native';
import localeStore from '../locale/localization';
import { Card, CardItem, Icon, Right, Button, StyleProvider } from 'native-base';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {  Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

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
  style={{height: 150, width: width - 100}}/>
  </View>
            <ScrollView>
            <View>
                <Card style={{paddingTop:2}} > 
          <CardItem button  onPress={this.navigateToScreen("News")}>
                     <FontAwesome style={{marginRight:10, fontSize: 24 }}>{Icons.newspaper}</FontAwesome>
              <Text>{localeStore.SideBar.News}</Text>
            </CardItem>
            <CardItem button  onPress={this.navigateToScreen('Forum')}>
              <FontAwesome style={{marginRight:10, fontSize: 24 }}>{Icons.question }</FontAwesome>
              <Text>{localeStore.SideBar.Forum}</Text>
            </CardItem>
            <CardItem button  onPress={this.navigateToScreen('Help')}>
              <FontAwesome style={{marginRight:10, fontSize: 24 }} >{Icons.infoCircle}</FontAwesome>
              <Text>{localeStore.SideBar.Help}</Text>
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

const style = StyleProvider.Cre