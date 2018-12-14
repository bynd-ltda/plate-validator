import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, StatusBar, SafeAreaView, Image, Keyboard} from 'react-native';

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
        erroLogin:''
      }

  static navigationOptions = {
    header: null
  };

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  navigateToValida = () => {

    // this.setState({ autenticated: true});

    // if(this.props.auth){
      if(this.state.autenticated === true){
        // console.log('chama tela verifica')
        // if(this.props.login_success){
        this.props.navigation.navigate('Valida', {
          email: this.state.email,
          password: this.state.password
        })
      // }
    }      
  }

  componentWillMount() {
        // console.log('componentWillMount')
        this.navigateToValida();
    }

  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps ' + nextProps.auth.login_success)
    console.log('erro login1: ' + nextProps.auth.message)
    console.log('erro login2: ' + nextProps.auth)
    console.log('erro login3: ' + nextProps)
    this.state.erroLogin = nextProps.auth.message;
    this.callNextScreen(nextProps.auth.login_success)
    }

  callNextScreen(login) {
    // this.state.autenticated = false
      if (login === true && this.state.autenticated === false) {
          // console.log('efetua login autenticated ' + this.state.autenticated)
          this.state.autenticated = true
          // console.log('efetua login autenticated ' + this.state.autenticated)
          this.navigateToValida();
      } else {
        // console.log('erro login ')
        this.state.autenticated = false
        
      }
  }

  componentDidMount(){
    // console.log('componentDidMount')

    this.navigateToValida();
  }

  keyboardDidHide(){
    this.setState({ erroLogin: ''});
    Keyboard.dismiss(0);
  }

  showPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  doLogin = () => {//2APLf9bbfYxgTYMZPm3
    // this.state.autenticated = false
    // console.log('email - ' + this.state.email + ' - senha - ' + this.state.password)
    this.props.doAuthRequest(this.state.email, this.state.password); 
  }

  showButtom = () => {
    if(this.state.email && this.state.password != ''){
      return (
        <TouchableOpacity style={styles.buttom} onPress={ () => {
          this.keyboardDidHide();
          this.doLogin();
          // this.navigateToValida();
        
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
                    style={this.state.email === '' ? styles.txtInputRed : styles.txtInputYelow}
                    autoCapitalize= "none"
                    autoCorrect={false}
                    value={this.state.email}
                    placeholder={firstInput}
                    onChangeText={ email => this.setState({ email })}

                />
                <View style={styles.firstSection}>
                  <TextInput
                      style={this.state.password === '' ? styles.txtInputRed : styles.txtInputYelow}
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
                <View>
                  <Text style={styles.errorLoring}>{this.state.erroLogin}</Text>
                </View>
                {/*<Text style={styles.count}>{this.state.password.length}/20</Text>*/}
                
               {
                 this.showButtom()
               }
            </View>
           

        
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
  // console.log('mapStateToProps ' + state.auth.message)
  return {
    auth: state.auth
  }
  
}

const mapDispatchToProps = dispatch => bindActionCreators( AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login)
