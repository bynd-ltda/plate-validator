import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:''
    };
  }

  registerUser(){
    this.props.clickRegistrar(this.state.username);
  }
  render() {
    return(
        <View style={styles.container}>
          <StatusBar style="light-content"/>
          <Text style={styles.title}>Novo Usuário</Text>
          <Text style={styles.text}>
            Insira um nome de usuário para regitrar 
          </Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Insira um nome de usuário"
              underlineColorAndroid="rgba(0,0,0,0)"
              value={this.state.username}
              onChangeText={username => this.setState({username})}

            />
            <TouchableOpacity style={styles.button} onPress={()=>{this.registerUser()}}>
              {this.state.loading
              ?<ActivityIndicator size="small" color="#FFFF"/>
              :<Text style={styles.buttonText}>Registrar</Text>}

            </TouchableOpacity>
            
          </View>
        </View>
    );
  }
}
export default connect(
  state => ({}),
  dispatch => bindActionCreators(actions, dispatch)
)(Register)
