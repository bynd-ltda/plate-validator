import React, { Component } from 'react';

import {Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';


import styles from './styles';

import { IMAGES} from './../../Constants';
const { emailSend } = IMAGES;

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
        <Image style={styles.email} source={emailSend} />
        <Text style={styles.txt}>Um email foi enviado para o setor responsavel</Text>
        <TouchableOpacity style={styles.buttom} onPress={ () => {
              this.navigateToValida();
            
            }}>
              <Text style={styles.txtButtom}>{txtButtonValidaother}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

