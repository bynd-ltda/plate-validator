import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, Platform } from 'react-native';

import { colors, metrics} from './styles';

import Login from './pages/login';

const createNavigator = () => StackNavigator({
    Login: { screen: Login },
    
  },{
    initialRouteName:  'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerBackTitle: null
    }
  });

export default createNavigator;
