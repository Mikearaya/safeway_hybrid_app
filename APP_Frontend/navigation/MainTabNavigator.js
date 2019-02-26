import React from 'react';
import { Platform, Button } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ForumsScreen from '../screens/ForumsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import ChatFormScreen from '../screens/ChatFormScreen';
import EmergencyContactsScreen from '../screens/EmergencyContactsScreen';
import StakeHoldersScreen from '../screens/StakeHoldersScreen';
import MigrationTypeScreen from '../screens/MigrationTypeScreen';
import GeneralInformationsScreen from '../screens/GenralInformationsScreen';
import PolicyViewScreen from '../screens/PolicyViewcreen';
import ForumDetailScreen from '../screens/ForumDetailScreen';

export const defaultColors =  {
        defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#279b23',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
    },
  }

  
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  'NewsDetail': NewsDetailScreen
},
  defaultColors);

HomeStack.navigationOptions = ({navigation}) => {
  return {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
    headerRight: (
        <Button
          onPress={() => navigation.toggleDrawer()}
          title="+1"
          color="#fff"
        />
      )
      }
};

const GroupForum = createStackNavigator({
  Forum: ForumsScreen,
  ForumDetail: ForumDetailScreen,
  ChatForm: ChatFormScreen
},
  defaultColors
);

GroupForum.navigationOptions = ({navigation}) => {
  return {
  tabBarLabel: 'Forums',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatboxes'}
    />
  ),
    headerLeft: (
        <Button
          onPress={() => navigation.toggleDrawer()}
          title="+1"
          color="#fff"
        />
      )
      }
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  EmergencyContacts: EmergencyContactsScreen,
  StakeHolders: StakeHoldersScreen,
  MigrationTypes: MigrationTypeScreen,
  GeneralInfo: GeneralInformationsScreen,
  Policies: PolicyViewScreen
},
defaultColors);

SettingsStack.navigationOptions =  ({navigation}) => {
  return {
  tabBarLabel: 'Information',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name = {
            Platform.OS === 'ios' ?
            `ios-information-circle${focused ? '' : '-outline'}` :
            'md-information-circle'
          }
    />
  ),
    headerLeft: (
        <Button
          onPress={() => navigation.toggleDrawer()}
          title="+1"
          color="#fff"
        />
      )
      }

};


const MainTabNavigator = createDrawerNavigator({
  News: HomeStack,
  Forum: GroupForum,
  Help: SettingsStack,

  
}
, {navigationOptions: ({navigation}) => {
 
}
});

MainTabNavigator.navigationOptions = ({navigation}) => ({
  
})

export default MainTabNavigator;