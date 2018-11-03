import React, { Component } from 'react';

import {Text, TouchableOpacity, SafeAreaView,} from 'react-native';


import styles from './styles';

import { KEYS , IMAGES} from './../../Constants';
const { txtButtonValidaother} = KEYS.check;

export default class Report extends Component {

    constructor(props){
        super(props);
        console.disableYellowBox=true
        
       
      }
      static navigationOptions = {
        header: null
      };    
   
  navigateToValida = () => {
    const { email, password } = this.props.navigation.state.params;
    console.log(email)
        this.props.navigation.navigate('Valida', {
          email: email,
          password: password
        })
      } 
      
  
  render(){
    return(
      <SafeAreaView style={styles.container}>
        
        <Text style={styles.txtSchedule}>Um email foi enviado para o setor responsavel</Text>
        <TouchableOpacity style={styles.buttom} onPress={ () => {
              this.navigateToValida();
            
            }}>
              <Text style={styles.txtButtom}>{txtButtonValidaother}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

