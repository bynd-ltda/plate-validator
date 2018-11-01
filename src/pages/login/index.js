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
      }

  static navigationOptions = {
    header: null
  };

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  navigateToForgot = () => {
    this.props.navigation.navigate('Forgot')
  }

  navigateToHome = () => {
    this.props.navigation.navigate('Home')
  }

  navigateToTutorial = () => {
    this.props.navigation.navigate('ComoUsar')
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
                <TextInput
                    style={styles.txtInput}
                    autoCapitalize= "none"
                    autoCorrect={false}
                    value={this.state.password}
                    placeholder={secondInput}
                    onChangeText={ password => this.setState({ password })}
                />
                <Image style={styles.eye} source={eye} />
                <TouchableOpacity style={styles.Link} onPress={ () => {

                }}>
                    <Text style={styles.txtLink}>{forgetPassword}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom} onPress={ () => {
                    this.login();
                }}>
                    <Text style={styles.txtButtom}>{txtButton}</Text>
                </TouchableOpacity>
            </View>
           

        
      </SafeAreaView>
    )
  }
}

