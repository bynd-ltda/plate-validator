import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, StatusBar, SafeAreaView, ActivityIndicator, Button, Alert, AsyncStorage } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ValidaActions } from './../../store/ducks/valida';

import styles from './styles';

import { KEYS } from './../../Constants';

import Modal from "react-native-modal";

import { TextInputMask } from 'react-native-masked-text'



class Valida extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true
    this.getEmail();
  }

  state = {
    letter: '',
    number: '',
    error: false,
    showPassword: true,
    plateCar: '',
    verificaSucesso: false,
    emailUser: ''
  }

  static navigationOptions = ({ navigation }) => {

    const { params = {} } = navigation.state;

    return {
      headerRight: (
        <Button
          onPress={() => params.handleSave()}
          title="Sair"
          color="#000000"
        />
      ),
      headerLeft: null,
      title: 'Validação',
    }

  };

  navigateToExit = () => {
    //  AsyncStorage.removeItem('email_key');
    //  AsyncStorage.removeItem('senha_key');
    AsyncStorage.setItem('senha_key', '');
    this.props.navigation.navigate('Login', {
      email: '',
      password: ''
    })
  }

  navigateToCheck = () => {
    console.log('email para rest: ' + this.state.emailUser);
    if (this.state.verificaSucesso === true) {
      const {  password } = this.props.navigation.state.params;
      this.props.navigation.navigate('Check', {
        email: this.state.emailUser === '' ? 'abraao@urbbox.com.br': this.state.emailUser,
        password: password,
        plate: this.state.plateCar,
      })
    }
  }

  getEmail = async () => {
    let email = '';
    try {
      email = await AsyncStorage.getItem('email_key');//senha_key//tela_inicial//email_key
    } catch (error) {
      console.log('catch: ' + error.message);
    }
    console.log('email recuperado: ' + email);
    this.setState({ emailUser: useremailId});
    return this.state.emailUser;
  }

  doValida = () => {

    if (this.state.letter.length > 0 ) {
      const { password } = this.props.navigation.state.params;

      const plate = this.state.letter.toUpperCase()// + "-" + this.state.number

      this.state.plateCar = plate;

      this.props.doValidaRequest(this.state.emailUser, password, plate);
    } else {
      // alert('Atenção','Preencha todos os campos');
      Alert.alert(
        'Atenção',
        'Preencha todos os campos',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      )
    }


  }

  componentWillReceiveProps(nextProps) {
    // console.log(' resultado verifica 2: ' + nextProps.data.data.status.length);
    if (nextProps.data.data.status.length > 0) {
      this.callNextScreen(nextProps.data.data.status.length)
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.navigateToExit.bind() });
    // let valid = this.myDateText.isValid();
    // let rawValue = this.myDateText.getRawValue();
  }

  callNextScreen(validar) {

    if (validar > 0 && this.state.verificaSucesso === false) {
      this.state.letter = ''
      this.state.number = ''
      this.state.verificaSucesso = true
      this.navigateToCheck();
    } else {
      this.state.verificaSucesso = false
    }
  }

  onChangeText(text) {
    // ...
  }


  render() {

    const { title, txtButton } = KEYS.valida;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.login}>{title}</Text>
        <View style={styles.form}>
          <View style={styles.firstSection2}>
            {/* <TextInput
              style={this.state.letter === '' ? styles.txtInputLetterRed : styles.txtInputLetterYelow}
              autoCapitalize="characters"
              autoCorrect={false}
              autoFocus={true}
              maxLength={3}
              keyboardType="default"
              returnKeyType={"next"}
              onSubmitEditing={() => { this.secondTextInput.focus(); }}
              onChangeText={letter => {
                this.setState({ letter: letter })
                if (letter.length == 3) this.secondTextInput.focus(); //assumption is TextInput ref is input_2
              }}
              value={this.state.letter}

            />
            
            <TextInput
              style={this.state.number === '' ? styles.txtInputNumberRed : styles.txtInputNumberYelow}
              ref={(input) => { this.secondTextInput = input; }}
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={4}
              keyboardType="numeric"
              onChangeText={number => this.setState({ number })}
              value={this.state.number}
            /> */}

            <TextInputMask
            textAlign={'center'}
            	placeholder="XXX-0000"
              // returnKeyType={"next"}
              autoCapitalize="characters"
              autoCorrect={false}
              autoFocus={true}
              maxLength={8}
              style={this.state.number === '' ? styles.txtInputNumberRed : styles.txtInputNumberYelow}
              ref={(input) => { this.secondTextInput2 = input; }}
              type={'custom'}
              options={{
                mask: 'AAA-9999'
              }}
              onChangeText={letter => {
                this.setState({ letter: letter })
              }}
              value={this.state.letter}
            />

          </View>



          <TouchableOpacity style={styles.buttom} onPress={() => {
            this.doValida();
            // this.navigateToCheck();
          }}>
            <Text style={styles.txtButtom}>{txtButton}</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
  return (
    {
      data: state.valida
    }
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(ValidaActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Valida)