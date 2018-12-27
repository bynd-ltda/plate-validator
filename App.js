import React, { Component } from 'react';
import createNavigator from './src/routes';

import AsyncStorage from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Routes = createNavigator();

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
    // return this.showScreen.bind();
  }

  showScreen = () => {
    const Routes = createNavigator();
    // const  value = await AsyncStorage.getItem('tela_inicial');

    // if (value !== null) {
    //   return (
    //     <Provider store={store}>
    //       <Routes />
    //     </Provider>
    //   );
    // } else {
    //   return (
    //     <Provider store={store}>
    //       <Routes />
    //     </Provider>
    //   );
    // }

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }

}
