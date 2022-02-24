import React from 'react';
import Typography from './Typography';
import { TouchableOpacity } from 'react-native';

const AskButton = ({cb, style, text}) => {
    return (
      <TouchableOpacity style={{borderRadius: 10}} onPress={cb}>
          <Typography style={style}>{text}</Typography>
      </TouchableOpacity>
    );
};

export default AskButton;