import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, StatusBar, SafeAreaView, ActivityIndicator} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ValidaActions } from './../../store/ducks/valida';

import styles from './styles';

import { KEYS } from './../../Constants';

import Modal from "react-native-modal";


 class Valida extends Component {

    constructor(props){
        super(props);
        console.disableYellowBox=true
        
       
      }

      state = {
        letter: '',
        number: '',  
        error: false,
        showPassword: true
      }
  
  navigateToCheck = () => {
    const { email, password } = this.props.navigation.state.params;
            this.props.navigation.navigate('Check', {
              email: email,
              password: password
            })
          }         

  doValida = () => {
    const { email, password } = this.props.navigation.state.params;
    
    const plate = this.state.letter.toUpperCase() + "-" + this.state.number
   

    this.props.doValidaRequest(email, password, plate);  

    
  }

  
  render(){

    const { title, txtButton} = KEYS.valida;

    return(
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.login}>{title}</Text>
            <View style={styles.form}>
              <View style={styles.firstSection}>
                <TextInput
                    style={styles.txtInputLetter}
                    autoCapitalize= "characters"
                    autoCorrect={false}
                    autoFocus={true}
                    maxLength={3}
                    keyboardType="default"
                    returnKeyType = {"next"}
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    onChangeText={letter => {
                        this.setState({ letter: letter })
                        if (letter.length == 3) this.secondTextInput.focus(); //assumption is TextInput ref is input_2
                      }}
                    value={this.state.letter}  

                />
                <TextInput
                    style={styles.txtInputNumber}
                    ref={(input) => { this.secondTextInput = input; }}
                    autoCapitalize= "none"
                    autoCorrect={false}
                    maxLength={4}
                    keyboardType="numeric"
                    onChangeText={ number => this.setState({ number })}
                    value={this.state.number}
                />

              </View>
                <TouchableOpacity style={styles.buttom} onPress={ () => {
                    this.doValida();
                    this.navigateToCheck();
                }}>
                    <Text style={styles.txtButtom}>{txtButton}</Text>
                </TouchableOpacity>
            </View>
        
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
 
  data: state.valida,

});

const mapDispatchToProps = dispatch => bindActionCreators( ValidaActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Valida)