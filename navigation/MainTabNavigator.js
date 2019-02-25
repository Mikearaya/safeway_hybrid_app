import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

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

const defaultColors = {
    /* The header config from HomeScreen is now here */
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

HomeStack.navigationOptions = {
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
};

const GroupForum = createStackNavigator({
  Forum: ForumsScreen,
  ForumDetail: ForumDetailScreen,
  ChatForm: ChatFormScreen
},
  defaultColors
);

GroupForum.navigationOptions = {
  tabBarLabel: 'Forums',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatboxes'}
    />
  ),
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

SettingsStack.navigationOptions = {
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
};

export default createBottomTabNavigator({
  HomeStack,
  GroupForum,
  SettingsStack,
},);
