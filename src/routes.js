import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, Platform } from 'react-native';

import { colors, metrics} from './styles';

import Login from './pages/login';
import Valida from './pages/valida';
import Check from './pages/check';
import Report from './pages/report';

const createNavigator = () => StackNavigator({
    Login: { screen: Login },
    Valida: { screen: Valida},
    Check: { screen: Check},
    Report: { screen: Report},
    
  },{
    // initialRouteName:  'Valida',
    initialRouteName:   'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.black,
      headerBackTitle: null
    }
  });

export default createNavigator;
