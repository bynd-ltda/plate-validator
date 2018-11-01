import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, StatusBar, SafeAreaView, Image} from 'react-native';

import styles from './styles';

import { KEYS } from './../../Constants';


export default class Valida extends Component {

    constructor(props){
        super(props);
        console.disableYellowBox=true
       
      }

      state = {
        error: false,
        isModalVisible: false,
        showPassword: true
      }

  static navigationOptions = {
    header: null
  };

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  


  render(){

    const { title, txtButton} = KEYS.valida;

    return(
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.login}>{title}</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.txtInput}
                    autoCapitalize= "none"
                    autoCorrect={false}

                />
                <TouchableOpacity style={styles.buttom} onPress={ () => {
                    
                }}>
                    <Text style={styles.txtButtom}>{txtButton}</Text>
                </TouchableOpacity>
            </View>
           

        
      </SafeAreaView>
    )
  }
}

