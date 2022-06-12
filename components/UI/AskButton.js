import React from 'react';
import Typography from './Typography';
import { StyleSheet, TouchableOpacity } from 'react-native';
import themes from '../../constants/_theme.constants';

const AskButton = ({cb, text, variant = 'primary', ...props}) => {
    return (
      <TouchableOpacity style={stylesOut[variant]} onPress={cb} {...props}>
          <Typography style={stylesIn[variant]}>{text}</Typography>
      </TouchableOpacity>
    );
};
const stylesIn = StyleSheet.create({
    "simple-primary": {
        color: themes.palette.primary,
        fontFamily: themes.fontFamily.medium,
    },
    "primary": {
        color: themes.palette.white,
        fontFamily: themes.fontFamily.medium,
    },
    "secondary": {
        color: themes.palette.primary,
        fontFamily: themes.fontFamily.bold,
        fontSize: 12,
    }
});
const stylesOut = StyleSheet.create({
    "simple-primary": {
        backgroundColor: 'transparent',
        paddingVertical: 18,
        paddingHorizontal: 28,
    },
    "primary": {
        backgroundColor: themes.palette.primary,
        paddingVertical: 18,
        paddingHorizontal: 28,
        borderRadius: 10,
        overflow: 'hidden',
        textAlign: 'center',
        width: '100%',
    },
    "secondary": {
        backgroundColor: 'transparent',
        marginTop: 6,
        paddingVertical: 11,
        paddingHorizontal: 18,
    },
});

export default AskButton;