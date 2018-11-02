import React, {Component} from 'react';
import createNavigator from './src/routes';

import { Provider } from 'react-redux';
import store from './src/store';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const Routes = createNavigator();
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
     
    );
  }
}
