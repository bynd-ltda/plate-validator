import React from 'react';

import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

const Detalhes =  props => {
  
  return(
    <View style={styles.container}>
      <View style={styles.contentContainer}>
          <Text style={[styles.nome]}>
              {props.item.Nome}
          </Text>
          <Text style={[styles.nome]}>
            {props.item.Sobrenome}
          </Text>
          <Text style={[styles.nome]}>
              {props.item.DataNascimento}
          </Text>
      </View>
    </View>
  );
}
export default connect(
  state => ({
      item:state.usuario.itemSelecionado
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Detalhes)

const styles = {
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  contentContainer:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  nome: {
    fontSize: 40,
    textAlign: 'center'
  }
  
}
