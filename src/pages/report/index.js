import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';

import { Creators as ReportActions } from './../../store/ducks/report';

import styles from './styles';

import { IMAGES } from './../../Constants';
const { emailSend } = IMAGES;

class Report extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true
    // this.doReport();
  }

  static navigationOptions = {
    header: null
  };

  componentWillReceiveProps(nextProps) {
    // console.log(' resultado verifica 2: ' + nextProps.data.data.status.length);
    // if (nextProps.data.data.status.length > 0) {
    //   this.callNextScreen(nextProps.data.data.status.length)
    // }
  }

  componentDidMount() {
    // this.navigateToCheck();
    // this.callNextScreen
  }

  doReport = () => {
    const { email, password, plate } = this.props.navigation.state.params;
    console.log('email: ' + email)
    console.log('senha: ' + password)
    console.log('placa: ' + plate)
    this.props.doReportRequest(email, password, plate);
    // this.props.doReportRequest('elton.rafaelmelo@gmail.com', 'bynd', 'aaa-2211');
  }

  navigateToValida = () => {
    this.doReport();
    const { email, password } = this.props.navigation.state.params;
    console.log(email)
    this.props.navigation.navigate('Valida', {
      email: email,
      password: password
    })
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.email} source={emailSend} />
        <Text style={styles.txt}>Um email foi enviado para o setor responsavel</Text>
        <TouchableOpacity style={styles.buttom} onPress={() => {
          this.navigateToValida();

        }}>
          <Text style={styles.txtButtom}>Validar placa</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

// const mapStateToProps = state => {
//   // console.log('teste report: ' + state.report.report_success)
//   return (
//     {
//       data: state.report
//     }
//   );
// }

const mapStateToProps = state => {
  // console.log('mapStateToProps ' + state.auth.message)
  return {
    auth: state.report
  }
  
}

const mapDispatchToProps = dispatch => bindActionCreators(ReportActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Report)
