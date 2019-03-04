import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native'
import localeStore from '../locale/localization'
import {
  Card,
  CardItem,
  Icon,
  Right,
  Button,
  StyleProvider,
  Content
} from 'native-base'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  menuIcons: {
    marginRight: 10,
    fontSize: 24,
    color: 'lightgreen'
  },
  menuText: {
    color: 'black'
  },
  menuItem: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1
  }
})
class SideBar extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    })
    this.props.navigation.dispatch(navigateAction)
  }

  render() {
    return (
      <View>
        <View
          style={{
            height: height/3,
            width: width - width/3,
            backgroundColor: 'lightgreen',
          
            justifyContent: 'center'
          }}
        >
        <Image 
        source={require('./../assets/images/sidebar.png')}
        style = {
          {
            height: height / 3,
            width: width - width / 3,
          }
        }

        />
   
        </View>
        <ScrollView>
          <View>
            <Content style={{ paddingTop: 2 }}>
              <CardItem
                style={styles.menuItem}
                button
                onPress={this.navigateToScreen('News')}
              >
                <FontAwesome style={styles.menuIcons}>
                  {Icons.newspaper}
                </FontAwesome>
                <Text style={styles.menuText}>{localeStore.SideBar.News}</Text>
              </CardItem>
              <CardItem
                style={styles.menuItem}
                button
                onPress={this.navigateToScreen('Forum')}
              >
                <Icon name="chatbubbles" style={styles.menuIcons} />
                <Text style={styles.menuText}>{localeStore.SideBar.Forum}</Text>
              </CardItem>
              <CardItem
                style={styles.menuItem}
                button
                onPress={this.navigateToScreen('Help')}
              >
                <Icon name="information-circle" style={styles.menuIcons} />
                <Text style={styles.menuText}>{localeStore.SideBar.Help}</Text>
              </CardItem>
              <CardItem
                style={styles.menuItem}
                button
                onPress={this.navigateToScreen('Auth')}
              >
                <Icon name="information-circle" style={styles.menuIcons} />
                <Text style={styles.menuText}>{localeStore.SideBar.Language}</Text>
              </CardItem>
            </Content>
          </View>
        </ScrollView>
      </View>
    )
  }
}

SideBar.propTypes = {
  navigation: PropTypes.object
}

export default SideBar

const style = StyleProvider.Cre
