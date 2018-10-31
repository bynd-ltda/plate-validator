import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  PixelRatio
} from 'react-native';
import {
  MKButton,
  MKColor
} from 'react-native-material-kit';
const window = Dimensions.get('window');
const widthRatio = window.width*PixelRatio.get();

const Button = props => {
  return (
    <MKButton
    {
      ...props}       
    >
    {props.children}
    </MKButton>
  );
}

Button.propTypes = {
  onPress : PropTypes.func.isRequired
}

export default Button
