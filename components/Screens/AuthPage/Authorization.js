import React from 'react';
import { StyleSheet, View} from 'react-native';
import { gStyles } from '../../../assets/style/gStyles';
import themes from '../../../constants/_theme.constants';
import AskButton from '../../UI/AskButton';

export default function Authorization({navigation}) {
    return (
      <View style={gStyles.containerCenter}>
          <AskButton
            style={styles.button}
            cb={() => navigation.navigate('SignUp')}
            text={'Зарегестрироваться'}
          />
          <AskButton
            style={{...styles.button, ...styles.button2}}
            cb={() => navigation.navigate('SignIn')}
            text={'Войти'}
          />
      </View>
    );
}

const styles = StyleSheet.create({
    button: {
        ...gStyles.button,
        margin: 14
    },
    button2: {
        color: themes.palette.primaryBlue,
        backgroundColor: 'transparent',
    }
});