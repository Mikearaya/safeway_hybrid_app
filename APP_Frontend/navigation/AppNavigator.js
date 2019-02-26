import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import EntryScreen from '../screens/EntryScreen';

const AuthStack = createStackNavigator({ SignIn: EntryScreen });

export default createAppContainer(createSwitchNavigator({
    Auth: AuthStack,
  AuthLoading: AuthLoadingScreen,
  Main: MainTabNavigator,
}
, {
  initialRouteName: 'AuthLoading',
  
}));