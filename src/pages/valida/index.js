import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, StatusBar, SafeAreaView, ActivityIndicator,Button, HeaderRight } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ValidaActions } from './../../store/ducks/valida';

import styles from './styles';

import { KEYS } from './../../Constants';

import Modal from "react-native-modal";


class Valida extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true
    console.log('passou aqui');

  }

  state = {
    letter: '',
    number: '',
    error: false,
    showPassword: true,
    plateCar: '',
    verificaSucesso: false,
  }

  static navigationOptions = ({navigation}) => {

    const {params = {}} = navigation.state;

    return {
      headerRight: (
        <Button
          onPress = {() => params.handleSave()}
          title="Sair"
          color="#000000"
        />
      ),
      headerLeft: null,
      title: 'Validação',
    }
    
  };

  navigateToExit = () =>{
      this.props.navigation.navigate('Login', {
        email: '',
        password: ''
      })
  }

  navigateToCheck = () => {

    if (this.state.verificaSucesso === true) {
      const { email, password } = this.props.navigation.state.params;
      this.props.navigation.navigate('Check', {
        email: email,
        password: password,
        plate: this.state.plateCar,
      })
    }
  }

  doValida = () => {
    const { email, password } = this.props.navigation.state.params;

    const plate = this.state.letter.toUpperCase() + "-" + this.state.number

    this.state.plateCar = plate;

    this.props.doValidaRequest(email, password, plate);
  }

  componentWillReceiveProps(nextProps) {
    console.log(' resultado verifica 2: ' + nextProps.data.data.status.length);
    if (nextProps.data.data.status.length > 0) {
      this.callNextScreen(nextProps.data.data.status.length)
    }
  }

  // saveDetails = () => {
  //   alert('Save Details');
  // }

  componentDidMount() {
    this.props.navigation.setParams({handleSave: this.navigateToExit.bind()});
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


  render() {

    const { title, txtButton } = KEYS.valida;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.login}>{title}</Text>
        <View style={styles.form}>
          <View style={styles.firstSection}>
            <TextInput
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

  // console.log('teste: ' + state)
  // console.log('teste valida: ' + state.valida.data.status)
  return (
    {
      data: state.valida
    }
  );
}

// const mapStateToProps = state => ({

//   data: state.valida,

// });

const mapDispatchToProps = dispatch => bindActionCreators(ValidaActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Valida)