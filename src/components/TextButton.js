import React from 'react';
import PropTypes from 'prop-types';

import {
    Text,
    Dimensions,
    PixelRatio
} from 'react-native';

import Button from './Button';

const window = Dimensions.get('window');
const widthRatio = window.width * PixelRatio.get();

const TextButton = props => {
    let enabled = true;
    if (props.enabled !== null &&
        typeof(props.enabled) !== 'undefined' && !props.enabled) {
        enabled = false;
    }

    const color = enabled ? '#F0B400' : '#57c7e1';
    return (
        <Button
            //{...props}
            disabled={!enabled}
            enabled={enabled}
            onPress={props.onPress}
            style={[styles.buttonMei, props.style, {backgroundColor: color}]}>
            <Text pointerEvents="none"
                  style={[styles.buttonMeiText, props.textStyle]}>
                {props.children}
            </Text>
        </Button>
    );
}

TextButton.propTypes = {
    onPress: PropTypes.func.isRequired
}

const styles = {
    buttonMeiText: {
        color: 'black',
        paddingLeft: 10,
        fontWeight:'bold',
        paddingRight: 10,
        fontSize: widthRatio > 600 ? 16 : 14,
    },
    buttonMei: {
        backgroundColor: '#8ea743',
        alignItems: 'center',
        borderRadius: 3,
        padding: 12,
        marginTop:10,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 4,
    }
}

export default TextButton
