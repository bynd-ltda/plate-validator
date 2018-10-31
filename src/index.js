import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { NavigatorModule } from './modules';
import configureStore from './configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <NavigatorModule.AppWithNavigationState/>
  </Provider>
);
AppRegistry.registerComponent('plateValidator', () => App);
