import React from 'react';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import themes from '../../constants/_theme.constants';

const Typography = ({style, children}) => {

    const [loaded] = useFonts({
        'inter-bold': require('../../assets/fonts/Inter-Bold.ttf'),
        'inter-semibold': require('../../assets/fonts/Inter-SemiBold.ttf'),
        'inter-regular': require('../../assets/fonts/Inter-Regular.ttf'),
        'inter-medium': require('../../assets/fonts/Inter-Medium.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
      <Text style={{
          fontFamily: themes.fontFamily.regular,
          color: themes.palette.black,
          fontSize: themes.fontSize.sebHeader,
          ...style
      }}>{children}</Text>
    );
};

export default Typography;