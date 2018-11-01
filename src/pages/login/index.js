import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, StatusBar, SafeAreaView, Image} from 'react-native';

import styles from './styles';

import { IMAGES, KEYS } from './../../Constants';


export default class Login extends Component {

    constructor(props){
        super(props);
        console.disableYellowBox=true
       
      }

      state = {
        email:'',
        password: '',
        error: false,
        isModalVisible: false,
        showPassword: true
      }

  static navigationOptions = {
    header: null
  };

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  navigateToValida = () => {
    this.props.navigation.navigate('Valida')
  }


  showPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render(){

    const { eye } = IMAGES;
    const { title, firstInput, secondInput, txtButton, forgetPassword} = KEYS.login;

    return(
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.login}>{title}</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.txtInput}
                    autoCapitalize= "none"
                    autoCorrect={false}
                    value={this.state.email}
                    placeholder={firstInput}
                    onChangeText={ email => this.setState({ email })}

                />
                <View style={styles.firstSection}>
                  <TextInput
                      style={styles.txtInput}
                      autoCapitalize= "none"
                      autoCorrect={false}
                      secureTextEntry={this.state.showPassword}
                      value={this.state.password}
                      placeholder={secondInput}
                      onChangeText={ password => this.setState({ password })}
                  />
                  <TouchableOpacity style={styles.eyeArea} onPress={ () => {
                      this.showPassword();
                   }}>
                     <Image style={styles.eye} source={eye} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.count}>0/20</Text>
                <TouchableOpacity style={styles.Link} onPress={ () => {

                }}>
                    <Text style={styles.txtLink}>{forgetPassword}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom} onPress={ () => {
                    this.navigateToValida();
                }}>
                    <Text style={styles.txtButtom}>{txtButton}</Text>
                </TouchableOpacity>
            </View>
           

        
      </SafeAreaView>
    )
  }
}

