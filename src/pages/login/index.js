import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  Keyboard,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from './../../store/ducks/auth';

import styles from './styles';

import { IMAGES, KEYS } from './../../Constants';

const { title, firstInput, secondInput, txtButton, forgetPassword } = KEYS.login;
const { eye } = IMAGES;

class Login extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true

  }

  state = {
    email: '',
    password: '',
    autenticated: false,
    error: false,
    isModalVisible: false,
    showPassword: true,
    erroLogin: '',
    isLoading: false
  }

  static navigationOptions = {
    header: null
  };

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  navigateToValida = () => {

    // this.setState({ autenticated: true});

    if (this.state.autenticated === true) {
      this.salvarLogin();
      this.recuperarSenha();

      this.props.navigation.navigate('Valida', {
        email: this.state.email,
        password: this.state.password
      })
    }
  }

  componentWillMount() {
    this.navigateToValida();
  }

  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps ' + nextProps.auth.login_success)
    // console.log('erro login1: ' + nextProps.auth.message)
    // console.log('erro login2: ' + nextProps.auth)
    // console.log('erro login3: ' + nextProps)
    this.state.erroLogin = nextProps.auth.message;
    this.callNextScreen(nextProps.auth.login_success)
  }

  callNextScreen(login) {
    if (login === true && this.state.autenticated === false) {
      // console.log('efetua login autenticated ' + this.state.autenticated)
      this.state.autenticated = true
      this.state.isLoading = false
      // console.log('efetua login autenticated ' + this.state.autenticated)
      this.navigateToValida();
    } else {
      // console.log('erro login ')
      this.state.isLoading = false
      this.state.autenticated = false

    }
  }

  salvarLogin = async () => {
      try {
        await AsyncStorage.setItem('email_key', this.state.email);
        await AsyncStorage.setItem('senha_key', this.state.password);
        console.log('salvo com sucesso');
      } catch (error) {
        console.log('erro ao salva: ' + error);
      }
  }

  recuperarSenha = async () => {
      try {
        const value = await AsyncStorage.getItem('email_key');
        const value2 = await AsyncStorage.getItem('senha_key');
        if (value !== null) {
          console.log(value + ' ' + value2);
        } else {
          console.log('não achou nada');
        }
       } catch (error) {
         console.log('erro ao recuperar email: ' + error);
       }
  }

  componentDidMount() {
    this.navigateToValida();
  }

  keyboardDidHide() {
    this.setState({ erroLogin: '' });
    Keyboard.dismiss(0);
  }

  showPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  doLogin = () => {//2APLf9bbfYxgTYMZPm3
    this.props.doAuthRequest(this.state.email, this.state.password);
  }

  showButtom = () => {
    if (this.state.email && this.state.password != '') {
      return (
        <TouchableOpacity style={styles.buttom} onPress={() => {
          console.log('carregando: ' + this.state.isLoading)
          this.state.isLoading = true
          console.log('terminou de carregar: ' + this.state.isLoading)
          this.showLoading();
          this.keyboardDidHide();
          this.doLogin();
          // this.navigateToValida();

        }}>
          <Text style={styles.txtButtom}>{txtButton}</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={styles.buttomDisable} onPress={() => {

        }}>
          <Text style={styles.txtButtom}>{txtButton}</Text>
        </View>
      )
    }
  }

  showLoading = () => {

    if (this.state.isLoading == true) {
      return (
        <View>
          <ActivityIndicator size="small" color="#00ff00" />
        </View>
      )
    }

  }


  render() {

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.login}>{title}</Text>
        <View style={styles.form}>
          <TextInput
            style={this.state.email === '' ? styles.txtInputRed : styles.txtInputYelow}
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.email}
            placeholder={firstInput}
            onChangeText={email => this.setState({ email })}

          />
          <View style={styles.firstSection}>
            <TextInput
              style={this.state.password === '' ? styles.txtInputRed : styles.txtInputYelow}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={this.state.showPassword}
              value={this.state.password}
              placeholder={secondInput}
              onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity style={styles.eyeArea} onPress={() => {
              this.showPassword();
            }}>
              <Image style={styles.eye} source={eye} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.errorLoring}>{this.state.erroLogin}</Text>
          </View>

          {
            this.showLoading()
          }

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

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login)
