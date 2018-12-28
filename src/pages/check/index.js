import React, { Component } from 'react';

import { View, Text, TouchableOpacity, SafeAreaView, Image, ActivityIndicator} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ValidaActions } from './../../store/ducks/valida';

import styles from './styles';

import { KEYS , IMAGES} from './../../Constants';


const { check , close } = IMAGES;
const { txtButtonValidaother, reportUser } = KEYS.check;

 class Check extends Component {

    constructor(props){
        super(props);
        console.disableYellowBox=true
        const { email, password, plate } = this.props.navigation.state.params;
        // console.log('placa: ' + plate)
      }

      static navigationOptions = {
        header: null
      };    
   
  navigateToValida = () => {
    const { email, password } = this.props.navigation.state.params;
    // console.log(email)
        this.props.navigation.navigate('Valida', {
          email: email,
          password: password
        })
      } 
  navigateToReport = () => {
        const { email, password, plate } = this.props.navigation.state.params;
        console.log('placa carro: ' + plate)
        this.props.navigation.navigate('Report', {
          email: email,
          password: password,
          plate: plate
        });
      }      

  showButtom = () => {
    // console.log('Tela resultado: ' + this.props.data.data.status)
    // console.log('Tela resultado: ' + this.props.data.data.plate)
    // console.log('Tela resultado: ' + this.props.data.data.ride_schedule)
    // console.log('Tela resultado: ' + this.props.data.data.parking_lot)
        if(this.props.data.data.status !== 'invalid'){
          return (
            <TouchableOpacity style={styles.buttom} onPress={ () => {
              this.navigateToValida();
            
            }}>
              <Text style={styles.txtButtom}>{txtButtonValidaother}</Text>
            </TouchableOpacity>
          )
        } else {
          return (
            <View>
            <TouchableOpacity style={styles.buttomV} onPress={ () => {
              this.navigateToValida();
            
            }}>
              <Text style={styles.txtButtomV}>{txtButtonValidaother}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttomV} onPress={ () => {
              this.navigateToReport();
            
            }}>
              <Text style={styles.txtButtomV}>{reportUser}</Text>
            </TouchableOpacity>
              
            </View>
          )
        }
      }

     
  
  render(){
    return(
      <SafeAreaView style={styles.container}>
        
        {
          this.props.data.data.status === ''
          ? 
          <View>
            <ActivityIndicator size="large" color="#cc092c" />
            <Text style={styles.txtValid}>Validando</Text>
          </View>
          :
          this.props.data.data.status !== 'invalid'  ?
          <View>
            <Image style={styles.check} source={check} /> 
            <Text style={styles.txtValid}>Carrro Valido</Text>
          </View>
          :
          <View>
            <Image style={styles.close} source={close} />
            <Text style={styles.txtValid}>Carrro não autorizado </Text>
          </View>
        }
        <Text style={styles.txtSchedule}>Carona: {this.props.data.data.ride_schedule}</Text>
        <Text style={styles.txtBolsao}>Bolsao: {this.props.data.data.parking_lot}</Text>
        {
          this.props.data.data.status === '' ? null : this.showButtom()
        }
       
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
 
  data: state.valida,

});

const mapDispatchToProps = dispatch => bindActionCreators( ValidaActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Check)