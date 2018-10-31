import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  PixelRatio
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const window = Dimensions.get('window');
const widthRatio = window.width*PixelRatio.get();

const Item =  props => {

  let rowColor = "#f7f9f9";
  let color = "#f5a623"
  return(
    <TouchableOpacity onPress={props.itemPressed}>
      <View style={styles.column}>
        <View style={[styles.row, {backgroundColor: rowColor}]}>
            <View style={styles.columnLeft}>
              <Text style={styles.nome}>{props.Nome + ' '+ props.Sobrenome}</Text>
              <Text style={styles.nascimento}>Data Nascimento: {props.DataNascimento}</Text>
            </View>
            <View style={styles.columnRight}>
                <Text style={[styles.ver, {color: color}]}>Ver</Text>
                <Icon name={"keyboard-arrow-right"} size={20} color="#505050"/> 
            </View> 
        </View>
        <View style={styles.line}/>
      </View>
    </TouchableOpacity>
  );
}

Item.propTypes = {
  Nome : PropTypes.string,
  Sobrenome: PropTypes.string,
  DataNascimento: PropTypes.string,
  itemPressed: PropTypes.func
}

const styles = {
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    backgroundColor: '#eee'
  },
  column:{
    flex:1,
    flexDirection: 'column'
  },
  line:{
    backgroundColor: '#ccc',
    height: 1
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  columnLeft:{
    flexDirection: 'column',
    paddingLeft:16,
    paddingTop: 8,
    paddingBottom: 8
  },
  columnRight: {
    paddingRight: 16,
    width: 120,//80
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  columnCenterRight: {
    paddingRight: 10,
    width: 30
  },
  nome:{
    fontSize: widthRatio>600 ? 14 : 12,
    color:'black',
  },
  nascimento:{
    fontSize: widthRatio>600 ? 10 : 8,
    color: '#505050',
    paddingLeft:2
  },
  ver:{
    fontSize: widthRatio>600 ? 14 : 12,
    textAlign: 'left',
    fontWeight:'bold'
  },
}
export default Item
