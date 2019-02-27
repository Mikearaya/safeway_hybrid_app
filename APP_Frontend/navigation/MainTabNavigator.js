import React from 'react';
import { Platform, Button, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation';
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
import { View, Image, } from 'react-native';
import { Icon } from 'native-base';
import SideBar from '../screens/SideBar';

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

const {width} = Dimensions.get('window');

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  'NewsDetail': NewsDetailScreen
},
defaultColors);


const GroupForum = createStackNavigator({
  Forum: ForumsScreen,
  ForumDetail: ForumDetailScreen,
  ChatForm: ChatFormScreen
},
  defaultColors
);


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  EmergencyContacts: EmergencyContactsScreen,
  StakeHolders: StakeHoldersScreen,
  MigrationTypes: MigrationTypeScreen,
  GeneralInfo: GeneralInformationsScreen,
  Policies: PolicyViewScreen,
},
defaultColors
);

const MainTabNavigator = createDrawerNavigator({
  News: HomeStack,
  Forum: GroupForum,
  Help: SettingsStack,

  
}
,{
 contentComponent: SideBar,
 drawerWidth: width - 100,
 contentOptions: {
   activeTintColor: 'orange'
 }
});

MainTabNavigator.navigationOptions = ({navigation}) => ({
  
})

export default MainTabNavigator;