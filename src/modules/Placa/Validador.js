import React, { Component } from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import styles from './styles';
import { colors } from '../../styles';
import {validatePlate} from '../../lib/Validations';
import {showAlert} from '../../lib/Dialog';
class Validador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plate:''
        };
      }
  clearInput(){
      this.setState({plate:''})
  }    
  checkPlate(){
      if(this.state.plate !== ""){
        if(validatePlate(this.state.plate.replace('-',''))){
            showAlert('Validou');
          }else{
            showAlert('Nao Validou');
          }
      }else{
        showAlert('Necessário informar uma placa');
      }
      
  }
  render() {
    return (
        <View style={styles.container}>
          <StatusBar style="light-content"/>
          <Text style={styles.text}>
            Insira uma placa para validar
          </Text>
          <LottieView
              style={styles.logoPin}
              source={require('./check.json')}
              autoPlay
              loop
            />
          <LottieView
              style={[styles.logoPin,{top:10, width:'48%', height:'48%'}]}
              source={require('./error.json')}
              autoPlay
              loop
            />  
          <View style={styles.form}>
            <TextInputMask
                refInput={(ref) => this.myDateText = ref}
                placeholder={'AAA-0000'}
                value={this.state.plate}
                type={'custom'}
                onChangeText={plate => this.setState({plate:plate.toUpperCase()})}
                options={{mask: 'AAA-9999'}}
                style={styles.input}
		    />
            <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = {()=>{this.clearInput()} }>
              <Icon name={"close"} size={15} color={colors.darkTransparent}/>     
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{this.checkPlate()}}>
              {this.state.loading
              ?<ActivityIndicator size="small" color="#FFFF"/>
              :<Text style={styles.buttonText}>Validar</Text>}

            </TouchableOpacity>
            
          </View>
        </View>
    );
  }
}
export default connect(
    state => ({
        
      }),
      dispatch => bindActionCreators(actions, dispatch)
)(Validador);
