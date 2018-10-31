import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    ListView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Item from './Item';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

class ListaItems extends Component{    
    
    constructor(props) {
        super(props)
        
        this.state = {
            listItem : this.props.list,
        };
        
    }
    static propTypes = {
        list: PropTypes.array
    };
    
    componentDidUpdate(){
        if(this.props.pode){
            this.setState({listItem : this.props.list});
            this.props.clickNaoPode();
        }
    }
    goDetails(rowData){
        this.props.clickItem(rowData);
    }
    addButton (){
        return(
            <TouchableOpacity onPress={()=>{this.props.clickOpenScreenADD()}} style={styles.floatButton}>
                <Icon name="add" size={15} color="white"/>
            </TouchableOpacity>
        )   
    }
    render (){
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataSource = ds.cloneWithRows(this.state.listItem);
        if (this.props.list.length > 0){
            return (
                <View style={{flex:1}}>
                    <View style={styles.container}>
                        <View style={styles.contentContainer}>
                            <ListView
                                dataSource={dataSource}
                                renderRow={(rowData)=>
                                    {
                                    return(<Item itemPressed={() => this.goDetails(rowData)} {...rowData}></Item>);
                                    }
                                }
                            />
                        </View>
                    </View>
                    {this.addButton()}
                </View>
            );
        }
        return (
            <View style={{flex:1}}>
                <View style={styles.container}>
                    <ActivityIndicator color= {'#0096af'}size={'large'}></ActivityIndicator>
                    <Text style={{color: '#0096af'}}>Carregando suas guias de imposto</Text>
                </View>
                {this.addButton()}
            </View>
        );
    }      
}
export default connect(
    state => ({
        list:state.usuario.listUser,
        pode:state.usuario.podeAtualizar,
    }),
    dispatch => bindActionCreators(actions, dispatch)
)(ListaItems)
