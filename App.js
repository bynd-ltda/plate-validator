import React, { Component } from 'react';
import createNavigator from './src/routes';
import createNavigator2 from './src/routes2';

import { AsyncStorage, View } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true
    this.getScreen();
  }

  state = {
    screen: ''
  }

  render() {
    
    return (
        this.showScreen()
    )
  }

  componentWillReceiveProps(nextProps) {
    console.log('sencomponentWillReceiveProps: ' + this.state.screen)
  }

  componentDidMount() {
  }

  getScreen = async () => {
    let userId = '';
    try {
      userId = await AsyncStorage.getItem('senha_key');//email_key//tela_inicial
    } catch (error) {
      console.log('catch: ' + error.message);
    }
    console.log('recuperado: ' + userId);
    this.setState({ screen: userId});
    return this.state.screen;
  }

  showScreen() {
    const Routes = createNavigator();
    const Routes2 = createNavigator2();

    console.log('senha: ' + this.state.screen)

    if ( this.state.screen === '') {
      return (
        <Provider store={store}>
          <View ></View>
        </Provider>
      );
    } else if (this.state.screen !== '') {
      return (
        <Provider store={store}>
          <Routes2 />
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <Routes />
        </Provider>
      );
    }
  }

}
