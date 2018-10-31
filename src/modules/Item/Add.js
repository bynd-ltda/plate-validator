import React,{Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ActivityIndicator,
  Alert
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        lastname:'',
        date:''
    };
  }

  addItem(){
    if(this.state.username == '' || this.state.lastname == '' || this.state.date == ''){
      Alert.alert(
        'Atenção!',
        'Preencha todos os campos',
        [
            {text: 'Ok', onPress: () => {}},
        ],
        { cancelable: false }
      );
    }else{
      let user = { "Nome": this.state.username, "Sobrenome":this.state.lastname, "DataNascimento":this.state.date }
      this.setState({username:'',lastname:'',date:''});
      this.props.clickAdd(user);
    }
    
  }
  render() {
    return(
        <View style={styles.containerAdd}>
          <StatusBar style="light-content"/>
          <Text style={styles.title}>Novo Item</Text>
          <Text style={styles.text}>
            Preencha os campos para adicionar um novo item
          </Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome"
              underlineColorAndroid="rgba(0,0,0,0)"
              value={this.state.username}
              onChangeText={username => this.setState({username})}

            />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Sobrenome"
              underlineColorAndroid="rgba(0,0,0,0)"
              value={this.state.lastname}
              onChangeText={lastname => this.setState({lastname})}

            />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Data Nascimento (Ex: 03/05/1992)"
              underlineColorAndroid="rgba(0,0,0,0)"
              value={this.state.date}
              onChangeText={date => this.setState({date})}

            />
            <TouchableOpacity style={styles.button} onPress={()=>{this.addItem()}}>
              {this.state.loading
              ?<ActivityIndicator size="small" color="#FFFF"/>
              :<Text style={styles.buttonText}>Registrar</Text>}

            </TouchableOpacity>
            
          </View>
        </View>
    );
  }
}
export default connect(
  state => ({}),
  dispatch => bindActionCreators(actions, dispatch)
)(Add)
