import React, { Component } from 'react';
import { View, TouchableOpacity, PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class HeaderHight extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  logout = ()=>{
    this.props.logout();
  }
  render() {
    return (
      <View>
        <View style={{borderRadius: 100, padding: PixelRatio.getPixelSizeForLayoutSize(5), width:50 }}>
          <TouchableOpacity onPress={()=>{this.logout()}}>
            <Icon name="exit-to-app" size={20} color="white" style={{borderRadius: 100}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect(
  state => ({}),
  dispatch => bindActionCreators(actions, dispatch)
)(HeaderHight)