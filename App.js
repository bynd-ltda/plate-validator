import React, {Component} from 'react';
import createNavigator from './src/routes';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const Routes = createNavigator();
    return (
     <Routes />
    );
  }
}
