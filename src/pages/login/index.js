import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, StatusBar, SafeAreaView, Image} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from './../../store/ducks/auth';

import styles from './styles';

import { IMAGES, KEYS } from './../../Constants';

const { title, firstInput, secondInput, txtButton, forgetPassword} = KEYS.login;
const { eye } = IMAGES;

class Login extends Component {

    constructor(props){
        super(props);
        console.disableYellowBox=true
       
      }

      state = {
        email:'',
        password: '',
        autenticated: false,
        error: false,
        isModalVisible: false,
        showPassword: true,
      }

  static navigationOptions = {
    header: null
  };

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  navigateToValida = () => {

    this.setState({ autenticated: true});

    if(this.props.auth){
      if(this.state.autenticated == true){
        this.props.navigation.navigate('Valida', {
          email: this.state.email,
          password: this.state.password
        })
      }
    }      
  }

  componentDidMount(){
     this.navigateToValida();
  }

  showPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  doLogin = () => {
    this.props.doAuthRequest(this.state.email, this.state.password); 

     
  }

  showButtom = () => {
    if(this.state.email && this.state.password != ''){
      return (
        <TouchableOpacity style={styles.buttom} onPress={ () => {
          this.doLogin();
          this.navigateToValida();
        
        }}>
          <Text style={styles.txtButtom}>{txtButton}</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={styles.buttomDisable} onPress={ () => {
        
        }}>
          <Text style={styles.txtButtom}>{txtButton}</Text>
        </View>
      )
    }
  }



  render(){

    
    

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
                <Text style={styles.count}>{this.state.password.length}/20</Text>
                <TouchableOpacity style={styles.Link} onPress={ () => {

                }}>
                    <Text style={styles.txtLink}>{forgetPassword}</Text>
                </TouchableOpacity>
               {
                 this.showButtom()
               }
            </View>
           

        
      </SafeAreaView>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
  
}

const mapDispatchToProps = dispatch => bindActionCreators( AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login)
